export const name="noise_control_on";
export const id="dl_74aee05248d9bfcd44fa";
export const url=new URL("../icons/noise_control_on.svg?v=d028e11d376643aca8034f28716ffd536593d1fded739ad43fd32127fbd3fd38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
