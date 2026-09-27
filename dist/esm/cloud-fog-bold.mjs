export const name="cloud-fog-bold";
export const id="dl_4b22c831ee8e46919cf8";
export const url=new URL("../icons/cloud-fog-bold.svg?v=aa00d1ea1d4a4258dbc1944daf2efcdfaae89b19d0ad9a6cd70852be61c9ab68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
