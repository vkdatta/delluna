export const name="scribble-loop";
export const id="dl_ce27f5a73b66f43f8864";
export const url=new URL("../icons/scribble-loop.svg?v=a5e497c3d6f7bfe87b9a7a74154376b76ab52d3976d22cbe5e88e725528d6f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
