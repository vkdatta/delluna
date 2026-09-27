export const name="boxing-glove-duotone";
export const id="dl_e3e10d64a9394783992c";
export const url=new URL("../icons/boxing-glove-duotone.svg?v=49d29be60eb4e3ea24ee8f6d9e05ccb4bbbbe5bd50be915076ee519e6ae0e8fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
