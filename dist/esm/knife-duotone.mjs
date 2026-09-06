export const name="knife-duotone";
export const id="dl_f1f33775382d42359ee5";
export const url=new URL("../icons/knife-duotone.svg?v=22bc090bc0f1213f07f7067d6febd76a5ce856f06c494afc72449ffb74d994d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
