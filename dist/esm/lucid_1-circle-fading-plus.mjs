export const name="lucid_1-circle-fading-plus";
export const id="dl_5c5b305f55854ae3bb6e";
export const url=new URL("../icons/lucid_1-circle-fading-plus.svg?v=996dd00a763dc4ab7618015218d26e43f7c4c6f63c800e46d302db94c786a5cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
