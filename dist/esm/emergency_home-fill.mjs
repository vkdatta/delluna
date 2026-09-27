export const name="emergency_home-fill";
export const id="dl_002a95a53eb922554323";
export const url=new URL("../icons/emergency_home-fill.svg?v=566bada1754a91078c7cf9327f1c1a3f467fa44a2112abfd9d78c4b400867353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
