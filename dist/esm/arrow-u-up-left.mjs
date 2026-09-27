export const name="arrow-u-up-left";
export const id="dl_27ff4aa83ece4dadb449";
export const url=new URL("../icons/arrow-u-up-left.svg?v=555f43785556b1ec8583b93541ea9b1edd1e665d0d991f74f6b3a2a39020fbe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
