export const name="minus-light";
export const id="dl_93d4e157b0254f7e9589";
export const url=new URL("../icons/minus-light.svg?v=41878bbdf6518f5d3698823b923b7de531ad2119f135ecb0df1200ae9bb60478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
