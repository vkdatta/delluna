export const name="sports_mma-fill";
export const id="dl_c13532e62b0ea85d5416";
export const url=new URL("../icons/sports_mma-fill.svg?v=5b0f9054e59f77c5d3b5251ae01f421129dac60263fc1dbd9dea44234db01dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
