export const name="3p";
export const id="dl_c2821cf108844e3d88ca";
export const url=new URL("../icons/3/3p.svg?v=4abdbbdf679a42ba2cad41c8faebb2569ebf8153ca98547ed8a3a99e4756a1d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
