export const name="noise_aware-fill";
export const id="dl_b3b15cd293824e939263";
export const url=new URL("../icons/N/noise_aware-fill.svg?v=aaefe92e7538a14e4f27e0f43a5e79a71f9cab78369cb19ecddef5fd68b4df5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
