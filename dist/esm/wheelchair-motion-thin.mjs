export const name="wheelchair-motion-thin";
export const id="dl_3cdb1c1d60844e9496fc";
export const url=new URL("../icons/W/wheelchair-motion-thin.svg?v=c24c436596a0ed8138f8798942376e9071b5fa2d56e7b4e1a7a9e0037d52b8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
