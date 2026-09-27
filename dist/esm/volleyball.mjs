export const name="volleyball";
export const id="dl_03691b0b81d247fd8b83";
export const url=new URL("../icons/volleyball.svg?v=87468f250816cc1df6ddada934fe1206f2c52c90e48c8e8a96cc9d8e27649878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
