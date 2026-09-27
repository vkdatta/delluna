export const name="scribble-loop";
export const id="dl_d75dfc78a3d7e19cccf2";
export const url=new URL("../icons/scribble-loop.svg?v=f4a35e44f39d8f0f967f8cd8a17f37e0efb8198db4ac7335930b6d760a852893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
