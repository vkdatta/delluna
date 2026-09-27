export const name="border_color";
export const id="dl_2131481755f9fa2ca040";
export const url=new URL("../icons/border_color.svg?v=4eaaed834705771ce8c2306b26edd720d0aa3a7dbeb5e5e817aadfe1b8599840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
