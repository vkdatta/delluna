export const name="water_orp";
export const id="dl_29027087a1134675bcb2";
export const url=new URL("../icons/water_orp.svg?v=60810810faa5918e4edd57fd49acbc5977974bbc7699897532a7fa127c8157f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
