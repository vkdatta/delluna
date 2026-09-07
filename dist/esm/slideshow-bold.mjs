export const name="slideshow-bold";
export const id="dl_86916c1d6f8c4682a3ab";
export const url=new URL("../icons/S/slideshow-bold.svg?v=b538baaf611b1000e2053afbde26608e10ce3c297a62a7e2dbee9fd198bb3b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
