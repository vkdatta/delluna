export const name="lucid_3-podium";
export const id="dl_c0f52e7c3bb84b1fa773";
export const url=new URL("../icons/lucid_3-podium.svg?v=5bfab376f2f217f6ef923b041ee221f800b01e1a0178ae01ed7bd2f38895f332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
