export const name="wallet-fill";
export const id="dl_05e63e57442e32b30ed3";
export const url=new URL("../icons/wallet-fill.svg?v=e078d0abea9e7e01b9bd97f847ea459f8cd1c1fdc863e8e1d68bd129ca82e2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
