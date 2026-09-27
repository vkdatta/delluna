export const name="pentagon-duotone";
export const id="dl_95ad3233fcb248f2939c";
export const url=new URL("../icons/pentagon-duotone.svg?v=5bbe988a042837d208d5f4c421a3150bdd75263443d32295c9ee09af3f02245c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
