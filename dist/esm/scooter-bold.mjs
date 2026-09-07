export const name="scooter-bold";
export const id="dl_0308616d786a467492c3";
export const url=new URL("../icons/S/scooter-bold.svg?v=15bd643f5e392abdd5e32ed7a7f6f35f1fc7e35de64aeec9d35f782a07f3a2f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
