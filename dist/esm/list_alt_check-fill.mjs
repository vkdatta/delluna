export const name="list_alt_check-fill";
export const id="dl_c25ca9709e130d4dfd28";
export const url=new URL("../icons/list_alt_check-fill.svg?v=b82ea34ca590a0467419a7648792145b74105e0b6f4c1f0ce386aef402ab7659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
