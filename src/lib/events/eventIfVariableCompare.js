import l10n from "../helpers/l10n";

export const id = "EVENT_IF_VALUE_COMPARE";

export const fields = [
  {
    key: "vectorX",
    type: "variable",
    defaultValue: "LAST_VARIABLE"
  },
  {
    key: "operator",
    type: "operator",
    width: "50%",
    defaultValue: "=="
  },
  {
    key: "vectorY",
    type: "variable",
    defaultValue: "LAST_VARIABLE"
  },
  {
    key: "true",
    type: "events"
  },
  {
    key: "__collapseElse",
    label: l10n("FIELD_ELSE"),
    type: "collapsable",
    defaultValue: false
  },
  {
    key: "false",
    showIfNotKey: "__collapseElse",
    type: "events"
  }
];

export const compile = (input, helpers) => {
  const { ifVariableCompare } = helpers;
  ifVariableCompare(
    input.vectorX,
    input.operator,
    input.vectorY,
    input.true,
    input.false
  );
};
