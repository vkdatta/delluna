export const name="lucid_1-cog";
export const id="dl_125e0b77ecb24ea386df";
export const url=new URL("../icons/lucid_1-cog.svg?v=f7ddd4d1744c7cc86275c6a44d843cede24beab16e112e8c3baa981bb85414bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
