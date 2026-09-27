export const name="beer-bottle-duotone";
export const id="dl_b8878617b55a4f94b70d";
export const url=new URL("../icons/beer-bottle-duotone.svg?v=a2c75e8227881a776a3a3fd36dd7375be04ae2292666b3a68f28f3487275a807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
