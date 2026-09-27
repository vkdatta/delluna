export const name="smiley-nervous-duotone";
export const id="dl_468db14c4885c1eb0409";
export const url=new URL("../icons/smiley-nervous-duotone.svg?v=ae54ae3748e453dad8b33e4544df5899f56f97651901c8d1ee4fc88271d61e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
