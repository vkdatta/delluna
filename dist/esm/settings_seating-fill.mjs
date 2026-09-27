export const name="settings_seating-fill";
export const id="dl_7ecdaaca14cd25fcc020";
export const url=new URL("../icons/settings_seating-fill.svg?v=8ea0e36b306cef9aa4ecaf23f528c77f47a05fd855523a4f22681ce6bc5d11e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
