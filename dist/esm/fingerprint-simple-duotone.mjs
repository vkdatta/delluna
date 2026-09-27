export const name="fingerprint-simple-duotone";
export const id="dl_55e44b9b50fb4ec99b3d";
export const url=new URL("../icons/fingerprint-simple-duotone.svg?v=a19b6c11010244909828273f92fb0e8388d76d7a34fb6b9af9c0299c31cda511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
