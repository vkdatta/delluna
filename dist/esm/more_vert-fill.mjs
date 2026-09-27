export const name="more_vert-fill";
export const id="dl_fbf78fa8e988b109a4f8";
export const url=new URL("../icons/more_vert-fill.svg?v=5fd0c2247f8e841f3544bc4c767cbffef47112a2a15faaf66bd5f461f501d4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
