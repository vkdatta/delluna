export const name="camera-rotate-fill";
export const id="dl_bc653e43fc764f3995a8";
export const url=new URL("../icons/camera-rotate-fill.svg?v=356708dbca77ef0808b0f2827a003a619b57130c7f7aa78f0a4faa23e7f32a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
