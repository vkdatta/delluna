export const name="toilet-bold";
export const id="dl_fee93eb843a5da365709";
export const url=new URL("../icons/toilet-bold.svg?v=000dd8e870d798a39bf5f30852c12e36769b26a37556b5fc9b471b7fed7dba0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
