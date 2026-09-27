export const name="user-square-duotone";
export const id="dl_e9f493b9d6e716699c5f";
export const url=new URL("../icons/user-square-duotone.svg?v=41831ad9f25e07e33b6db134d3e1703b3ad60f55b18d50a351281667ce518d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
