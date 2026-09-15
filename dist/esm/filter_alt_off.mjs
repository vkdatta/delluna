export const name="filter_alt_off";
export const id="dl_4c396c5c0b5b4e80b6b4";
export const url=new URL("../icons/F/filter_alt_off.svg?v=a3b4f0f0a6c604105880fad7cacb13b32809a2c6de72b212bd1be21bcab345d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
