export const name="shrimp";
export const id="dl_c2247903625267ddcc45";
export const url=new URL("../icons/shrimp.svg?v=03ffb792dc971349a7b2bf79265ae91881a4caeb6d5ecc3caf5d191e2bf0a8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
