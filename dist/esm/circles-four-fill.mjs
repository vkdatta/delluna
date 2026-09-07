export const name="circles-four-fill";
export const id="dl_cbf355535fb74a6eb0a6";
export const url=new URL("../icons/circles-four-fill.svg?v=e5ca95f8aba2d0cf521a7c489b15e425b5b70fc707e47cb4de01dae33a8ef03f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
