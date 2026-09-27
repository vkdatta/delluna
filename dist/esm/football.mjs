export const name="football";
export const id="dl_8a6ef5950d9a4f8bb9c0";
export const url=new URL("../icons/football.svg?v=e63d7cf206834e26bdb3b3b185ba7eb955d6445356ebab7101ac88c2d3c5a265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
