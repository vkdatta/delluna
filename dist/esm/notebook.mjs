export const name="notebook";
export const id="dl_5716d0ffe8c349c98ec9";
export const url=new URL("../icons/notebook.svg?v=6922d703af3f8b2b914c713c3c82beaa0f04cc31279b71828bef4785873dfac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
