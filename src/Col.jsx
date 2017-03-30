import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

const DEFAULT_NODE = 'div';
const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const ReorderType = PropTypes.oneOf(['first', 'last']);


export default class Col extends Component {
  static propTypes = {
    xs: ModificatorType,
    sm: ModificatorType,
    md: ModificatorType,
    lg: ModificatorType,
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    xsReorder: ReorderType,
    smReorder: ReorderType,
    mdReorder: ReorderType,
    lgReorder: ReorderType,
    reverse: PropTypes.bool,
    nodeName: PropTypes.string
  };

  static defaultProps = {
    nodeName: DEFAULT_NODE,
  };

  render() {
    const {
      xs, xsOffset, xsReorder,
      sm, smOffset, smReorder,
      md, mdOffset, mdReorder,
      lg, lgOffset, lgReorder,
      reverse,
      className,
      nodeName,
      children,
      ...other
    } = this.props;
    const Element = nodeName || DEFAULT_NODE;
    const classes = classnames({
      [flexboxgrid['col-xs' + (Number.isInteger(xs) ? '-' + xs : '')]]: xs,
      [flexboxgrid['col-sm' + (Number.isInteger(sm) ? '-' + sm : '')]]: sm,
      [flexboxgrid['col-md' + (Number.isInteger(md) ? '-' + md : '')]]: md,
      [flexboxgrid['col-lg' + (Number.isInteger(lg) ? '-' + lg : '')]]: lg,
      [flexboxgrid[`col-xs-offset-${xsOffset}`]]: xsOffset,
      [flexboxgrid[`col-sm-offset-${smOffset}`]]: smOffset,
      [flexboxgrid[`col-md-offset-${mdOffset}`]]: mdOffset,
      [flexboxgrid[`col-lg-offset-${lgOffset}`]]: lgOffset,
      [flexboxgrid[`${xsReorder}-xs`]]: xsReorder,
      [flexboxgrid[`${smReorder}-xs`]]: smReorder,
      [flexboxgrid[`${mdReorder}-xs`]]: mdReorder,
      [flexboxgrid[`${lgReorder}-xs`]]: lgReorder,
      [flexboxgrid['col-reverse']]: reverse
    }, className);

    return (
      <Element className={ classes } { ...other }>
        { children }
      </Element>
    );
  }
}
