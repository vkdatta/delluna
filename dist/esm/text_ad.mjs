export const name="text_ad";
export const id="dl_1d1614b7a4a8e223d116";
export const url=new URL("../icons/text_ad.svg?v=fedaf2eb9d529ec16d9e158d79a3e8815527008fad466bc109d09f5bf49056f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
