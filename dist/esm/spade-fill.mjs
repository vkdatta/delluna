export const name="spade-fill";
export const id="dl_c53da32e6b934dfea4ba";
export const url=new URL("../icons/spade-fill.svg?v=3dadccd7869df0ff2f66ace5a10c20c4d0e397bf51b2480325bba8d2a30a0aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
