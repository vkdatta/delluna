export const name="first-aid-kit-light";
export const id="dl_c664b610e9ef48e698c3";
export const url=new URL("../icons/first-aid-kit-light.svg?v=aecc7200f97137b7fc358325a8c9980b99746c6baa3cc0975749a9f757d43df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
