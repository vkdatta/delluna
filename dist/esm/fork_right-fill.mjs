export const name="fork_right-fill";
export const id="dl_b6818e188a409a1e483d";
export const url=new URL("../icons/fork_right-fill.svg?v=977561ae55a5f5cb2d98b1b46b83733b4e124caefc363e987f4c82d7020336cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
