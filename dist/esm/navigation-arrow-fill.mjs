export const name="navigation-arrow-fill";
export const id="dl_ca4d441d513c47e9b4a2";
export const url=new URL("../icons/navigation-arrow-fill.svg?v=49ebafa744283494e96e3b507cd3bcd1e3bf1574fcbc9869d2ec361056e52eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
