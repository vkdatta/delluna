export const name="confirmation_number-fill";
export const id="dl_4db2dcb301e0064329f4";
export const url=new URL("../icons/confirmation_number-fill.svg?v=f37cf81d8d958348ae9fcb4f1fdbf4a1273a66d4defc453d4cc145fb5e47bd64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
