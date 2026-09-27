export const name="lucid_2-cylinder";
export const id="dl_679f15cd08e849749494";
export const url=new URL("../icons/lucid_2-cylinder.svg?v=59e8444ad0eea9c1041d9fe9947664069fab6429c1813108c3d4c5dd1a405d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
