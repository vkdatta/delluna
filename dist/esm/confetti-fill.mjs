export const name="confetti-fill";
export const id="dl_8c44a57cd205460ba61b";
export const url=new URL("../icons/confetti-fill.svg?v=4a40a0342e48c3e239a68eaf5fc28d6292d0eb48660971e400316fe6577a8c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
