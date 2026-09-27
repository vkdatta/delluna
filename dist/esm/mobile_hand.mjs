export const name="mobile_hand";
export const id="dl_da349daad6f088707ded";
export const url=new URL("../icons/mobile_hand.svg?v=f9deb4c8900e7e1b8cb41be70766bfda592955dcd994849afe6a2340bf86021f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
