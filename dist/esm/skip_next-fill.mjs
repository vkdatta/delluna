export const name="skip_next-fill";
export const id="dl_8be2310cc99f74513088";
export const url=new URL("../icons/skip_next-fill.svg?v=11f056934969904d91af48e95107067f3e2f6d3599983e9308365f813d3d4e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
