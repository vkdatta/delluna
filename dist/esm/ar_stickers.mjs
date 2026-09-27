export const name="ar_stickers";
export const id="dl_5acd56a401e289441744";
export const url=new URL("../icons/ar_stickers.svg?v=cca5586d3946663766bcb9a73881e0038c62a898022cda1855cc96ed3fbe7688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
