export const name="update";
export const id="dl_2b672cb6355fa8d3883d";
export const url=new URL("../icons/material_symbols/update.svg?v=67601223addbe2d94567344e354d733892715059bebd296bead1d90b4354c084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
