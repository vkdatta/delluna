export const name="line_start_circle-fill";
export const id="dl_3e171d916b2d474cbc61";
export const url=new URL("../icons/line_start_circle-fill.svg?v=2995eab551564928f531293cad45380f695ef3a1ac9ad2b13989e420de94b3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
