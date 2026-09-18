export const name="label_off-fill";
export const id="dl_c2a57d691fcc4b2683b3";
export const url=new URL("../icons/L/label_off-fill.svg?v=ef63c36f6a4f92fa2cb666de3c7b36eba9e533fbda758853b2aaeacfef4299e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
