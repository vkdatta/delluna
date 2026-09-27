export const name="grid_4x4-fill";
export const id="dl_7a29efcf9ec2453ec7db";
export const url=new URL("../icons/grid_4x4-fill.svg?v=f0b394226ed983eaa88b3c957c74a6d91beb07d22a3635ecd57c84b86175f706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
