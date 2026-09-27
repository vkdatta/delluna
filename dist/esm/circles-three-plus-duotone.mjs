export const name="circles-three-plus-duotone";
export const id="dl_ee38232649b54373bc31";
export const url=new URL("../icons/circles-three-plus-duotone.svg?v=8b2d32d3b2f3025b883e138814f192d5306227dca3dbff5595adfdd087883f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
