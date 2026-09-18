export const name="perm_media-fill";
export const id="dl_c2de881fe8f64df1950d";
export const url=new URL("../icons/perm_media-fill.svg?v=7e0b8bb77476101a2958cd55af6d487ea8dd8b3a1da2361246fc1bd43dbf6fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
