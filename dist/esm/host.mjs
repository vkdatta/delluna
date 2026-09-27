export const name="host";
export const id="dl_64895164a121bb285e7d";
export const url=new URL("../icons/host.svg?v=af352893e62461673ef6261a3e031a64782730d2670c061d5ec483ec3c49aa71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
