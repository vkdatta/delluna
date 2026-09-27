export const name="lucid_1-citrus";
export const id="dl_5a0bd832a20940428e7a";
export const url=new URL("../icons/lucid_1-citrus.svg?v=c726b2f8cd93f2d1fdafd897ef2f59b0f91adf784c3c26b8363092d3dce41eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
