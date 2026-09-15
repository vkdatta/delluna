export const name="connected_tv-fill";
export const id="dl_4690284b3ac84bd09478";
export const url=new URL("../icons/C/connected_tv-fill.svg?v=c71eefb62b16196aa021ad321feba40f58cd9ed8c21b669b9fdc6db39a3b0e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
