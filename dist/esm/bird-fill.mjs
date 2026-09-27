export const name="bird-fill";
export const id="dl_6db9b166e3d7407bad19";
export const url=new URL("../icons/bird-fill.svg?v=780ab72c7f7a4d539822da3f8decf79f25902351176233018413297132c02365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
