export const name="offline_pin";
export const id="dl_e02778b6e34844a234ba";
export const url=new URL("../icons/offline_pin.svg?v=081a4404bc15e35e3915a73e75db16262c996de1625a9a2ede95c8b48747b94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
