import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import t from "../../i18n/en.json";
import { formationActions, formationSelectors } from "../../redux/formation";
import s from "./ClearFormation.module.scss";

const ClearFormation = () => {
  const dispatch = useDispatch();

  const isFormationEmpty = useSelector(formationSelectors.getIsFormationEmpty);

  const handleClearFormation = useCallback(
    () => dispatch(formationActions.emptyFormationBoard()),
    [dispatch]
  );

  return (
    <nav className={s.clearFormation}>
      <button
        className={s.shareBtn}
        disabled={isFormationEmpty}
        onClick={handleClearFormation}
      >
        {t["button.label.emptyFormation"]}
      </button>
    </nav>
  );
};

export default ClearFormation;
