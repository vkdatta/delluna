export const name="stool-fill";
export const id="dl_6adcbb840e764dc496d6";
export const url=new URL("../icons/S/stool-fill.svg?v=3dbf51e0869771e30e7889b1edb19fe7e51c74317cb6fdaee4cabafb05a1f233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
