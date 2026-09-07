export const name="arrow-line-down-left-thin";
export const id="dl_020f0ff7b26f4d2bb4f2";
export const url=new URL("../icons/arrow-line-down-left-thin.svg?v=b82a23fc40e85e24c74ce1e32e9391bb02a72f51bf9ddd69b0ef94fa25a0038c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
