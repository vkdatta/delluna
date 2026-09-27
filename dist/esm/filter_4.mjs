export const name="filter_4";
export const id="dl_57d60e81327e806f978d";
export const url=new URL("../icons/filter_4.svg?v=7fa56ea59388e273985b58a17ae47116c0101734ce80b4ce7c1276c05d5bccbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
