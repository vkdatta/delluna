export const name="top_panel_close-fill";
export const id="dl_d202e96852ffb0b1d3da";
export const url=new URL("../icons/top_panel_close-fill.svg?v=954cde4734ec8fba5a62f2fba3fb822b7f2ee67556a5a35954aff78b52ef768f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
