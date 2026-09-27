export const name="surround_sound-fill";
export const id="dl_c8263772110e73593ed3";
export const url=new URL("../icons/surround_sound-fill.svg?v=ee9d190bcb216afbcb0eaa52938a19238853cdca3cc26ef32b30448b1dc163b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
