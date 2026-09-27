export const name="lucid_1-cog";
export const id="dl_125e0b77ecb24ea386df";
export const url=new URL("../icons/lucid_1-cog.svg?v=797898193971b0b543b2d035e6c518a4fa9e9c88c0a33ec4588b33b4d2b5ca61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
