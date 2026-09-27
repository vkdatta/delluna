export const name="chair-bold";
export const id="dl_cf1d060d45c04cf0805b";
export const url=new URL("../icons/chair-bold.svg?v=0d6d51c26f85762e2d6229b1fab76a70213be1b331248564f02fa4cb6b234ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
