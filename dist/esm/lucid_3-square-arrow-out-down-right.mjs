export const name="lucid_3-square-arrow-out-down-right";
export const id="dl_257f6bda913e4ef9a08e";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-right.svg?v=df3ef669c1fad7994044c6e3d9cbdeb89e941a8e01af5246f027c00912dbba1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
