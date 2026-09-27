export const name="graph_8";
export const id="dl_06c0ffdb12daf13aeb67";
export const url=new URL("../icons/graph_8.svg?v=3be42a52fc735887c27ac1b31136b5f718835e4460c962a1343776eb1665563f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
