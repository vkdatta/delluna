export const name="home_improvement_and_tools";
export const id="dl_9af5e82a1c8b83a2ec47";
export const url=new URL("../icons/home_improvement_and_tools.svg?v=fc7198794a95015b1093106b8834661ee202f23464f7931c9d1be32d377c837b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
