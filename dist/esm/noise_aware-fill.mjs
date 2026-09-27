export const name="noise_aware-fill";
export const id="dl_fdbbb0c89b02cbf19103";
export const url=new URL("../icons/noise_aware-fill.svg?v=af60e86becbadd46d78099d245e465796e4cb2907b3912a6cd758942bb1174bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
