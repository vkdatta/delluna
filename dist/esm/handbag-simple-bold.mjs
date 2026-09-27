export const name="handbag-simple-bold";
export const id="dl_967101e0723f437f90cf";
export const url=new URL("../icons/handbag-simple-bold.svg?v=d1a057c32977ca3690078dfdfefd5ef39bb63d7f566eba2f1687a8956bb83fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
