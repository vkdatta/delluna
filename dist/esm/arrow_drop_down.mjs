export const name="arrow_drop_down";
export const id="dl_1379633d23664c9bbbe6";
export const url=new URL("../icons/arrow_drop_down.svg?v=b3bed5deb884b0e9e5ce923b9eb7d907e4cf1ad017ba502f310e983a6e820216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
