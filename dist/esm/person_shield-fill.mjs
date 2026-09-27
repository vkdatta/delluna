export const name="person_shield-fill";
export const id="dl_b8217b531758cab7a0d6";
export const url=new URL("../icons/person_shield-fill.svg?v=8b4b945bb926c773394f12d02dd65bb74b62ea2373de069e251d23be4999339a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
