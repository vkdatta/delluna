export const name="party_mode-fill";
export const id="dl_85261bbdd6a008a51a99";
export const url=new URL("../icons/party_mode-fill.svg?v=aa5a2c801deaad19465cd2899c47c5047f6e959f00d2c4c3aa59d16d782d514d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
