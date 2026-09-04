export const name="currency-btc";
export const id="dl_b4dfd2979d85444ea5e0";
export const url=new URL("../../icons/C/currency-btc.svg?v=a48a0528f42f63eedac405d1355a0ebb74bb3e574c9baf12fefc789bc99a00d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
