export const name="water_orp-fill";
export const id="dl_344bd0055ab14850b1b3";
export const url=new URL("../icons/water_orp-fill.svg?v=9a020663eebe5404663b2fe7fcb81dd0bb08c24e003b4ade44fa375c351835c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
