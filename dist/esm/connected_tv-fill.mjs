export const name="connected_tv-fill";
export const id="dl_81c8671a8a9074dabc2e";
export const url=new URL("../icons/connected_tv-fill.svg?v=c71eefb62b16196aa021ad321feba40f58cd9ed8c21b669b9fdc6db39a3b0e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
