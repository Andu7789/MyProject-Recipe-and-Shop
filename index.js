import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

PostcodeLookup.setup({
  apiKey: "ak_test",
  context: "#lookup_field",
  outputFields: {
    line_1: "#first_line",
    line_2: "#second_line",
    line_3: "#third_line",
    post_town: "#post_town",
    postcode: "#postcode"
  }
});