export const name="lightning";
export const id="dl_b262026c923a42299e0b";
export const url=new URL("../icons/lightning.svg?v=877d069ca2a918d6a7c1eecf21293b6e152da46143a2981a5263e19ef8f301c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
