export const name="sports_mma-fill";
export const id="dl_9988ea01269247ec821e";
export const url=new URL("../icons/S/sports_mma-fill.svg?v=5b0f9054e59f77c5d3b5251ae01f421129dac60263fc1dbd9dea44234db01dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
