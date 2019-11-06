import Button from './Button';
import { Modal as AntdModal } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

class Modal extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    beforeClose: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    visible: false,
    zIndex: 1050,
    alignStyle: 'top',
    extendControls: [],
    debug: false,
  };

  closeModal = () => {
    this.props.beforeClose && this.props.beforeClose();
    this.props.onClose();
  };

  onConfirm = () => {
    this.props.onConfirm && this.props.onConfirm();
    this.closeModal();
  };

  render() {
    let { title, visible, zIndex, alignStyle } = this.props;

    return (
      <AntdModal
        title={title}
        onCancel={this.closeModal}
        visible={visible}
        footer={[
          <Button key="close" onClick={this.closeModal}>
            取消
          </Button>,
          <Button key="insert" onClick={this.onConfirm}>
            确认
          </Button>,
        ]}
        zIndex={zIndex}
        style={alignStyle === 'middle' ? { top: '50%', transform: 'translateY(-50%)' } : {}}
      >
        {this.props.component}
      </AntdModal>
    );
  }
}

export default Modal;
