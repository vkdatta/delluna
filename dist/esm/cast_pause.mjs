export const name="cast_pause";
export const id="dl_e9f4e3c96a6c4dd1896e";
export const url=new URL("../icons/C/cast_pause.svg?v=0b360739d61a3aea5a5f4661a676dfc2177d044e135c5624f9f2b5881340414f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
