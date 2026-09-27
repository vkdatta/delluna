export const name="playlist_add_circle-fill";
export const id="dl_c338512f5db5244cd4d7";
export const url=new URL("../icons/playlist_add_circle-fill.svg?v=976c0ef52c0d5913d32a7bd622705c3845cf54cb6b644b7dd596c63bb1d32843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
