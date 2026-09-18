export const name="mimo_disconnect-fill";
export const id="dl_051d8bd1ba43412da2a7";
export const url=new URL("../icons/mimo_disconnect-fill.svg?v=670f064067f3c0095c4c3d3c67db364a4c567912203bfa1548dbff95b8d0d8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
