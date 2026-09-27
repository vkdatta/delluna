export const name="projector-screen-duotone";
export const id="dl_51900455b1414f6fb467";
export const url=new URL("../icons/projector-screen-duotone.svg?v=37294532e2c507c8b41616efe684303d036fb49fb0a8321fdb939fa0cf9e081d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
