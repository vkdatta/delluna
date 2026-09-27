export const name="lucid_2-layer-arrow-down";
export const id="dl_282f37409e9b4834bb26";
export const url=new URL("../icons/lucid_2-layer-arrow-down.svg?v=5099a90b91a725f13bf77d5758a2ab9092a07d8b307c1172398545b0f84c0401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
