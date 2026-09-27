export const name="lucid_1-clock-10";
export const id="dl_77313ed9a01d40d8b0f9";
export const url=new URL("../icons/lucid_1-clock-10.svg?v=727e8980da1d72503bbb9fdc4b7673276cac09df34c97eb5419141d2dce93112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
