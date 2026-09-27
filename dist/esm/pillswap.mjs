export const name="pillswap";
export const id="dl_ea5d6a919b77457eb8a5";
export const url=new URL("../icons/pillswap.svg?v=d442a1ecc34a9488a5af4b0378718997f4a0ff7f89203f66a1cafb33d59c04dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
