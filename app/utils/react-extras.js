import _ from 'lodash';

export let RestAttrsMixin = {
	restAttrs() {
		return _.omit(this.props, _.keys(this.constructor.propTypes));
	}
};
