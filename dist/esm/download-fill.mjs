export const name="download-fill";
export const id="dl_54e1f2c0d35f4e9091fc";
export const url=new URL("../icons/download-fill.svg?v=8855dbc4ce5338bd6567b5ab7b5989c0af0b098a345cac9d0205db733e21a165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
