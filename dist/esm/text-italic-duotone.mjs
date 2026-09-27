export const name="text-italic-duotone";
export const id="dl_14b279c7b55d01350ce9";
export const url=new URL("../icons/text-italic-duotone.svg?v=e159624e44b642c12367aa30bfc91c61ed64bfe462b3f46fd09a7f069e531b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
