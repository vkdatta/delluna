export const name="file-py-bold";
export const id="dl_c7a5c9b125524330834c";
export const url=new URL("../icons/file-py-bold.svg?v=142112cbe6396ebfd10bc6023f314aded3d7eb649ba8dfe8e7f1ad745edbb83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
