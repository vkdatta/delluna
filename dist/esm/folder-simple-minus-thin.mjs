export const name="folder-simple-minus-thin";
export const id="dl_edf3ecc3768844f28f63";
export const url=new URL("../icons/folder-simple-minus-thin.svg?v=59171475189fa8f8048ef31426d9f4af65edf81cd6190ca92fd586f4b12209d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
