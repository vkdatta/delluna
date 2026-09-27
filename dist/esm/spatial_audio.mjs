export const name="spatial_audio";
export const id="dl_f1ce0b9c70fdf6c7934e";
export const url=new URL("../icons/spatial_audio.svg?v=caf71bd4ee871325aea06a946ced3d6c57f496cc19d7f751a9e315ef47e2010b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
