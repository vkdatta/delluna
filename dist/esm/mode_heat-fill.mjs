export const name="mode_heat-fill";
export const id="dl_0e35076cfc177935eed6";
export const url=new URL("../icons/mode_heat-fill.svg?v=c3877de88a689eaf9c4966404b9de48131468168f92932f5d745142ed07284d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
