export const name="7mp-fill";
export const id="dl_49bd5ea588e17ddaba2e";
export const url=new URL("../icons/7mp-fill.svg?v=44896604d60aee0dd2e51534d8e2abb32730169d8514b95ae2a0b8b5f9a4f9f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
