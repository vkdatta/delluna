export const name="gift-bold";
export const id="dl_64bbeea3bb3045f39986";
export const url=new URL("../icons/gift-bold.svg?v=ef0b754c932c660afffcf6ef9a666308c48fb729c45327d311c78c46d10f616b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
