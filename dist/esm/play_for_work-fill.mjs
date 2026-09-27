export const name="play_for_work-fill";
export const id="dl_e3ea36562ec1179de383";
export const url=new URL("../icons/play_for_work-fill.svg?v=9d08a0b95bbe208210a20b9c776bcfdd25ca0f95afbc96dbbbba1b3e90d74468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
