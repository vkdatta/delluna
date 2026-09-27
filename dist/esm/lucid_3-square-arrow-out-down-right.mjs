export const name="lucid_3-square-arrow-out-down-right";
export const id="dl_257f6bda913e4ef9a08e";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-right.svg?v=0c536617d959267da8d574c46437fc73fe0c2e5acd73cd48cf8c6ccc13d5de9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
