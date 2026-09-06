export const name="arrow-bend-up-right-fill";
export const id="dl_12aa7532689f44e3aafb";
export const url=new URL("../icons/arrow-bend-up-right-fill.svg?v=260f12b29e088c4ee787b09df70e25cd107ed6582afc9a6195c455af6761d77b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
