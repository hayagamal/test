import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./test.html";
import { getFoo } from "data-service";
class Test extends LightningElement {
  wired1;
  wired2;
  /*LWC compiler vX.X.X*/
}
_registerDecorators(Test, {
  wire: {
    wired1: {
      adapter: getFoo,
      dynamic: ["key1"],
      config: function ($cmp) {
        return {
          key2: ["fixed"],
          key1: $cmp.prop1
        };
      }
    },
    wired2: {
      adapter: getFoo,
      dynamic: ["key1"],
      config: function ($cmp) {
        return {
          key2: ["array"],
          key1: $cmp.prop1
        };
      }
    }
  }
});
export default _registerComponent(Test, {
  tmpl: _tmpl,
  sel: "lwc-test",
  apiVersion: 9999999
});