export const exampleList = [
  {
    value: 0,
    displayValue: "sql",
    csv:
      "25,Deli\n50,Produce\n75,Bakery\n100,General Merchandise\n125,Technology",
    template: `INSERT INTO categories
    (category_id, category_name)
    VALUES
    ({{1}}, '{{b}}');`,
    delimiter: { open: "{{", close: "}}" },
  },
  {
    value: 1,
    displayValue: "list",
    csv:
      "unicodedata,Access the Unicode Database.\nunittest,Unit testing framework for Python.\nurllib\nuu,Encode and decode files in uuencode format.\nuuid,UUID objects (universally unique identifiers) according to RFC 4122",
    template: `◼ <% 1 %>: <% 2 %>`,
    delimiter: { open: "<%", close: "%>" },
  },
];
export const delimiterList = [
  {
    value: JSON.stringify({ open: "<%", close: "%>" }),
    displayValue: "<% var %>",
  },
  {
    value: JSON.stringify({ open: "{%", close: "%}" }),
    displayValue: "{% var %}",
  },
  {
    value: JSON.stringify({ open: "{{", close: "}}" }),
    displayValue: "{{ var }}",
  },
];
