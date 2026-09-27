export const name="8k";
export const id="dl_cff647d92ad16cc4c24b";
export const url=new URL("../icons/8k.svg?v=f40472fbadc615be077e8e9a9d7d6790f4dd5354ed24321700d3e86b3a595b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
