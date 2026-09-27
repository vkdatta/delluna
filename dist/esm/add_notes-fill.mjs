export const name="add_notes-fill";
export const id="dl_6c6d3bf3c70b4ea063cd";
export const url=new URL("../icons/add_notes-fill.svg?v=99b07d13b443939c5600f336444246cefba7a86b3a84067a8badec4ab5ca3891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
