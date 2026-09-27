export const name="bell";
export const id="dl_31726b71b03d4c939fa4";
export const url=new URL("../icons/bell.svg?v=0fedc874cc727a66f2f3169b6ffddc5fde6367f61f9c2b41332e51a73e8fb32b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
