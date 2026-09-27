export const name="lucid_2-croissant";
export const id="dl_f65963e3d38b4cc2bea4";
export const url=new URL("../icons/lucid_2-croissant.svg?v=3fba96403060f160591173b834f822d77ff3b3d8d002db491f8285cacaad67cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
