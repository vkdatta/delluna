export const name="lucid_2-helicopter";
export const id="dl_e11d1a95a2804f34aca1";
export const url=new URL("../icons/lucid_2-helicopter.svg?v=76c712385e8188139f929143947f11f28dd3eb3dcbca2fbae6fea65f62f42d99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
