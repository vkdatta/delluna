export const name="fiber_manual_record-fill";
export const id="dl_a6af5212bcfb44a59448";
export const url=new URL("../icons/fiber_manual_record-fill.svg?v=fe6135decdc880df9960ab1892fb65a59d395987249efffe072fbe4325cf0df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
