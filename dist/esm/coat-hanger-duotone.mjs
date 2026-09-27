export const name="coat-hanger-duotone";
export const id="dl_1eeee8bfc0ec47fe8d5f";
export const url=new URL("../icons/coat-hanger-duotone.svg?v=11d5a237610777ec5944b0a22dfc87ac1532634423bdbd840f155c0e017766f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
