export const tableColumn = [
  "OrderDate",
  "Region",
  "Rep",
  "Item",
  "Units",
  "Unit Cost",
];

export const tableData = [
  [
    "10/25/20",
    "Central",
    "Smith",
    "Desk",
    200,
    125,
    "=DISCOUNT(E1:F1)",
    "=IF(G1 = 0, E1*F1, E1*F1-G1)",
  ],
  [
    "6/17/15",
    "Central",
    "Kivell",
    "Desk",
    5,
    125,
    "=DISCOUNT(E2:F2)",
    "=IF(G2 = 0, E2*F2, E2*F2-G2)",
  ],
  [
    "11/15/15",
    "Central",
    "Gill",
    "Pencil",
    500,
    1.29,
    "=DISCOUNT(E3:F3)",
    "=IF(G3 = 0, E3*F3, E3*F3-G3)",
  ],
];
