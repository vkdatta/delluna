export const name="gauge-light";
export const id="dl_2a55aa45c7694720923c";
export const url=new URL("../icons/gauge-light.svg?v=52c18026a2c9ce09af7b11ed79fca4c25d9173e583e4af6193d20f524e89f976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
