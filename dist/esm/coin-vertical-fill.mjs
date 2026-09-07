export const name="coin-vertical-fill";
export const id="dl_ac7f398fa54b4b66bfa7";
export const url=new URL("../icons/coin-vertical-fill.svg?v=c093c7d0eb636171735ad29f18b37826d767a73c1de73804479f4939c426cb57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
