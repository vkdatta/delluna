export const name="cookie";
export const id="dl_576c6e32f03d6753b520";
export const url=new URL("../icons/cookie.svg?v=0bef61c2519e4bb4f6f716511206f001e0d4686fc996e05117de348560bd672b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
