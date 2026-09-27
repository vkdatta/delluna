export const name="splitscreen_landscape_add-fill";
export const id="dl_31923684db1569e6226f";
export const url=new URL("../icons/splitscreen_landscape_add-fill.svg?v=05b947e50864269b9a0adc3c8742a8a2b9e5be6358e2edf191c10df6b4aa4677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
