export const name="folder-plus-bold";
export const id="dl_03e3097471244bf68e79";
export const url=new URL("../icons/folder-plus-bold.svg?v=3f1a9d284c15a025969739612b5de3d6f81f73d66635e9ff7077a1695a70eb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
