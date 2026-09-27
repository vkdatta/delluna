export const name="lucid_1-cone";
export const id="dl_ad878ba6bd9a4b04959a";
export const url=new URL("../icons/lucid_1-cone.svg?v=010d66ade1d0a6365e1d4b51da4c5fa19c3c6ded9ad99a62366283cacb0929da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
