export const name="water_loss";
export const id="dl_1241debc4dae774552c8";
export const url=new URL("../icons/water_loss.svg?v=59b9146b210d763a796ec5340dc388624b2fc6798f8b8c260f1edb05c9437ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
