export const name="square-text";
export const id="dl_1844f3bcefe4450a873c";
export const url=new URL("../icons/square-text.svg?v=7093d13801e73c49fe07a9f3cc4c86b0b4410bfc5a79ef1db0ec975b174ca2c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
