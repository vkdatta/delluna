export const name="paint-roller-duotone";
export const id="dl_4599b234b2fc40b2873d";
export const url=new URL("../icons/paint-roller-duotone.svg?v=1aad242ead9b98b0c1bef6625bc91fdd7b40046bb3c7e03b5bb71bfb426f729a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
