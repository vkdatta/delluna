export const name="text_ad";
export const id="dl_217082a5ed30d61e10b8";
export const url=new URL("../icons/text_ad.svg?v=68a395bbbae9de29eb057c3a25a5823d7b11386d7e07a2f881bb108dbe07b58f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
