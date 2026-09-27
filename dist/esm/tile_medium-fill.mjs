export const name="tile_medium-fill";
export const id="dl_225fcc86c4f500902ded";
export const url=new URL("../icons/tile_medium-fill.svg?v=b1073c6f8b023752fb988a009cf924ee818225516a300832f1ea1dc2bd30ce41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
