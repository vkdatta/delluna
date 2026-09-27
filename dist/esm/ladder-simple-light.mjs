export const name="ladder-simple-light";
export const id="dl_1ded6f1878ee49e08ed9";
export const url=new URL("../icons/ladder-simple-light.svg?v=e09a1d4de68e9d8ac36293a3076c2ddbea3c48c1eea58ae82f8af4b37129a7ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
