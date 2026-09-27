export const name="lucid_2-cylinder";
export const id="dl_679f15cd08e849749494";
export const url=new URL("../icons/lucid_2-cylinder.svg?v=88da106bc2d3b11af93d175c79fc38b93125c64a0d026ea3f782510a210045e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
