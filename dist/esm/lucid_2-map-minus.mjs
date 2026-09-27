export const name="lucid_2-map-minus";
export const id="dl_8a054ee03abc4924a469";
export const url=new URL("../icons/lucid_2-map-minus.svg?v=fefbafe557ec9b81589f19e10b182cdc2ef6dfafe559e09d25bffc1a2964af38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
