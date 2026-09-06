export const name="code-block";
export const id="dl_d7b8229b9be64453bb95";
export const url=new URL("../icons/code-block.svg?v=07a1a8144a3c5bbab8be03a1c3b718afbbf2b4cba149f9e2822415cef4054ee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
