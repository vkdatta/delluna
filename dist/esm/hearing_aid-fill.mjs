export const name="hearing_aid-fill";
export const id="dl_9c045639edaaf10f2c89";
export const url=new URL("../icons/hearing_aid-fill.svg?v=54ec6a3fe73cfd571cd778c9cb982661d6f2b3f83e003e1e4bab9d41d65c600f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
