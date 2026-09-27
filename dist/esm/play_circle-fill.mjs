export const name="play_circle-fill";
export const id="dl_ea324ee96e127898bd8a";
export const url=new URL("../icons/play_circle-fill.svg?v=a18274107bd1d294cc2bd93aeaa2929a3d7c173bcecaef112689df98f8a92222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
