export const name="lucid_2-cylinder";
export const id="dl_679f15cd08e849749494";
export const url=new URL("../icons/lucid_2-cylinder.svg?v=1e76022d0d15dc3763be2dcd4bf921f7d3d905223a542bba9c19b154d830da86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
