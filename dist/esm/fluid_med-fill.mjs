export const name="fluid_med-fill";
export const id="dl_82c544f8b98ab26a4ee3";
export const url=new URL("../icons/fluid_med-fill.svg?v=922279edf4ba522d057f1c4df62d4cfa7b52d3b6ae7f9707d28c18293cf40967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
