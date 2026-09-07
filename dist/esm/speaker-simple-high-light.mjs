export const name="speaker-simple-high-light";
export const id="dl_584bcc77a02d4e4aa75a";
export const url=new URL("../icons/S/speaker-simple-high-light.svg?v=a91430a128f777e95ad9685f9b9d2fb53e48aceef6a875a9c71ad3b347f1f0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
