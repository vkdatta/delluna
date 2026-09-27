export const name="eject-duotone";
export const id="dl_cce11df114754e99ad2a";
export const url=new URL("../icons/eject-duotone.svg?v=74605201d77daefceb5200f8f4126527dd700a3832b8df0de86917555bd157d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
