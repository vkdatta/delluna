export const name="scooter-bold";
export const id="dl_84b3c3c1f8152511a24e";
export const url=new URL("../icons/scooter-bold.svg?v=15bd643f5e392abdd5e32ed7a7f6f35f1fc7e35de64aeec9d35f782a07f3a2f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
