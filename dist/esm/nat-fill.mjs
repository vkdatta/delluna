export const name="nat-fill";
export const id="dl_2248449572162a58342a";
export const url=new URL("../icons/nat-fill.svg?v=337c0cc1c6dbe4bf7847b18cd972378a5e9d2b3f45f3f8d806160d09a050b676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
