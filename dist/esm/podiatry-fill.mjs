export const name="podiatry-fill";
export const id="dl_0b238adaf32d47d8aa68";
export const url=new URL("../icons/podiatry-fill.svg?v=8ce9d7145927f9ea6797b07386df5849e927985eb87a9851c5d8c068a6837bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
