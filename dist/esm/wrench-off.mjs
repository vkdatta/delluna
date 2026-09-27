export const name="wrench-off";
export const id="dl_94e746d8452641a78b2d";
export const url=new URL("../icons/wrench-off.svg?v=efafe275afa55f77f21babb3ba3e092daaba91ce84026151243e64f53d1f5829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
