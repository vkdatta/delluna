export const name="selection-slash-bold";
export const id="dl_e75de6cf4eaaa409badc";
export const url=new URL("../icons/selection-slash-bold.svg?v=3339cab3e5106e19de069c9f16ce0f83847b6d2209b99014815901dbe976d13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
