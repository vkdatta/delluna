export const name="mode_dual";
export const id="dl_fad446f8fb184508b128";
export const url=new URL("../icons/mode_dual.svg?v=a5af067cad72aa021802705395522f0cb10a5976c0e29b031aa7f97965256beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
