export const name="shoe_cleats-fill";
export const id="dl_de1cb8eff05f95ad8e76";
export const url=new URL("../icons/shoe_cleats-fill.svg?v=bb75fe61117221c825a59d169a41894ea4bab85c09873bd4aa9cf36cffa7fde9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
