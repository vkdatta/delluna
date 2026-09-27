export const name="wine";
export const id="dl_8aac6acf1a61aad47dd0";
export const url=new URL("../icons/wine.svg?v=6d562b5aa74ab4d0ca3963c92501afca80e8c57b09602b77200a69a6807789a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
