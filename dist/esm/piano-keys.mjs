export const name="piano-keys";
export const id="dl_4ce26d8b9c254cdbb855";
export const url=new URL("../icons/piano-keys.svg?v=edc0fddb8560368fb2ed6bd68e4d5570ee18cbacc0492235fb46339d02f40a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
