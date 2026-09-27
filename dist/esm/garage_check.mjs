export const name="garage_check";
export const id="dl_81ee8a550377f56373bf";
export const url=new URL("../icons/garage_check.svg?v=b43a722bb1ad75281d39741f4be3fa493fe2fffa8fff8477166ced22d78ff79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
