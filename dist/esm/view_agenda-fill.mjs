export const name="view_agenda-fill";
export const id="dl_6aefdf418370dd8b02af";
export const url=new URL("../icons/view_agenda-fill.svg?v=03f8388b8db931820fff860c02bb14c687fa5a8c428936de385e844f48c750b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
