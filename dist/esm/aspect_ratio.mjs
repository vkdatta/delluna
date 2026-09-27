export const name="aspect_ratio";
export const id="dl_9317319af65f2ff19074";
export const url=new URL("../icons/aspect_ratio.svg?v=c601e4e78dd4c6384b7e4b3ec751a8a3d7317906524f98240e21a8704901a3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
