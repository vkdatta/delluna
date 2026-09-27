export const name="pipe-wrench-duotone";
export const id="dl_8fb096ea249442f1a34c";
export const url=new URL("../icons/pipe-wrench-duotone.svg?v=4e12f1b2e13c35d404679d222a7d3f3042cd3776733b425271b3101c94a2b1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
