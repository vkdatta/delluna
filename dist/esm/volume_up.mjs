export const name="volume_up";
export const id="dl_2264770f84699fb2e0cf";
export const url=new URL("../icons/volume_up.svg?v=9830b2d1d596c8291f26a9d7454a0a30fa8ee155b7a5b494e24d7e57e3d61426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
