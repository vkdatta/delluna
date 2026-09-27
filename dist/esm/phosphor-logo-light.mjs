export const name="phosphor-logo-light";
export const id="dl_ab08bdc88a3e4757b540";
export const url=new URL("../icons/phosphor-logo-light.svg?v=680c548e705f830b3a141a59f92c0157da86640c3df7acb3423676b0ba1c1b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
