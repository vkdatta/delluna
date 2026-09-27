export const name="process_chart-fill";
export const id="dl_fce3991c3631f4dba9a1";
export const url=new URL("../icons/process_chart-fill.svg?v=dd9446d45089ead2b42834f5296e3bfa69c026dbb6016454f7d2afc835824ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
