export const name="gift-bold";
export const id="dl_64bbeea3bb3045f39986";
export const url=new URL("../icons/gift-bold.svg?v=8225a62e6da3e5386012911b9a5ce9b674bda61ecc5857a1d5d28a4266a137c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
