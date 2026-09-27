export const name="circles-three-light";
export const id="dl_26154c1830c445018863";
export const url=new URL("../icons/circles-three-light.svg?v=f8286e06e1c6a06783ca3cdb932505223b20936e2b1f189439e5defe25fceb89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
