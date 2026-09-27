export const name="sim-card-fill";
export const id="dl_5dfa1083b6f7384998cd";
export const url=new URL("../icons/sim-card-fill.svg?v=5a880fd1264106d18c25151a4a2a7fa0cbfd404bc40de45970b4e6b0e36afcd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
