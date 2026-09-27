export const name="lucid_3-map-pin-pen";
export const id="dl_cb2009bccf784cb6bb66";
export const url=new URL("../icons/lucid_3-map-pin-pen.svg?v=2dbd24bceb3189fc50dabd48ecab76e982ea3580af740c6b673653a8fd6a32c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
