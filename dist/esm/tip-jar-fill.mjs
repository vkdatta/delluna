export const name="tip-jar-fill";
export const id="dl_9739f492e73b4ec5b442";
export const url=new URL("../icons/T/tip-jar-fill.svg?v=f8a45a79b3b6c4aaea73cb7efede19f3eb0bc6e4bc0521c1f091e4191017f62f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
