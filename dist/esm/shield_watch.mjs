export const name="shield_watch";
export const id="dl_8c2376485b027e3fec8d";
export const url=new URL("../icons/shield_watch.svg?v=ee3f2299aef132c80a3d68780a264f67906afcb58c9d2baabb8bcde5481a146e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
