export const name="sneaker-light";
export const id="dl_61decee07e934c34abba";
export const url=new URL("../icons/S/sneaker-light.svg?v=158e1cf543e510ed0b608ce601a8330ac9debb8b5ea665b0069d9a90d0c4a749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
