export const name="swap";
export const id="dl_fab553152de24ad61957";
export const url=new URL("../icons/swap.svg?v=18999e943fc947d3fa40a392f8eb84f7a7ebd8aabd8e21f1c3ae1890cc6d99ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
