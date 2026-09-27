export const name="square-split-horizontal-bold";
export const id="dl_bbd0ba351b37d676a21f";
export const url=new URL("../icons/square-split-horizontal-bold.svg?v=5ed5b554154f007fb01ac44f80e62150c9d30d179ebc105417dfe7589d141eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
