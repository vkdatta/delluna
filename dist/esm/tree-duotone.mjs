export const name="tree-duotone";
export const id="dl_e431adfe713898876b52";
export const url=new URL("../icons/tree-duotone.svg?v=c5e37d10bdab1673630b68428b58f76054b68533319a79ca07f904ea41a8f2b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
