export const name="lucid_1-cog";
export const id="dl_125e0b77ecb24ea386df";
export const url=new URL("../icons/lucid_1-cog.svg?v=4baa6d64d655dd35f3a87b30c4c25132dbaccf6398055d6fbc49982ae55e64df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
