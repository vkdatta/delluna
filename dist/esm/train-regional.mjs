export const name="train-regional";
export const id="dl_1dc64986410d4d158f7e";
export const url=new URL("../icons/train-regional.svg?v=9b338bdb8f4276e11dbc8f2cca4967c2fd0b7e84c7503530864284743624bf76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
