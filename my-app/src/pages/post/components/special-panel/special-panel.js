import { Icon } from "../../../../components";
import styled from "styled-components";

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					id="fa-calendar-o"
					margin="0 7px 0 0"
					size="18px"
					onClick={() => {}}
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" size="21px" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	& .published-at {
		display: flex;
		font-size: 18px;
	}
	& .buttons {
		display: flex;
	}
	& i {
		position: relative;
		top: -1px;
	}
`;
