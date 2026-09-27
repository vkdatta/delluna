export const name="flashlight_on-fill";
export const id="dl_3272e2bc9fafab929db1";
export const url=new URL("../icons/flashlight_on-fill.svg?v=d7db5d2bff039c9d9d717c9179e73a9b737f85e91968d5dd8cddce1ad31f23ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
