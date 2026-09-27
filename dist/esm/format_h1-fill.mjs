export const name="format_h1-fill";
export const id="dl_6642264102e4d3e69b16";
export const url=new URL("../icons/format_h1-fill.svg?v=5d4426d7a0d5dd35783f178b661ad1f9cfca4406764ade02a3c9e490cab60ceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
