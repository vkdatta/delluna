export const name="line_start-fill";
export const id="dl_4591110f88a37b832479";
export const url=new URL("../icons/line_start-fill.svg?v=d5645b0cb4957241359cf2cf8cf7ac81abd029cf294c14425b86ee75b27a618a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
