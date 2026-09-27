export const name="less-than";
export const id="dl_e6bbe4fcf95948dfabbd";
export const url=new URL("../icons/less-than.svg?v=c8004acd93bbf7feb9927dd4355d52a9defcf2a03099250b2ed937d24f971f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
