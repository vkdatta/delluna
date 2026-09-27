export const name="speaker-simple-none-duotone";
export const id="dl_04ab9833d68e13e909a1";
export const url=new URL("../icons/speaker-simple-none-duotone.svg?v=c747c7e29ab68020df00cf8312972a4a6dadc6e5fa44fa7ff5076b223a3689d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
