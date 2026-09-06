export const name="arrow-arc-left-light";
export const id="dl_5d9633013b7142508d15";
export const url=new URL("../icons/arrow-arc-left-light.svg?v=de9caf1771cd1830b2e8ab0eb6600ff84beef84112792ce3e0acd2a1f0f9cc32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
