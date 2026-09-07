export const name="squares-four-fill";
export const id="dl_0d9386623e1647fba910";
export const url=new URL("../icons/S/squares-four-fill.svg?v=728b2dbfa447ec3fec54f0f8b3b52cec573c51da00c00a6d73f699027758340c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
