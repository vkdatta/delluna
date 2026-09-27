export const name="crown-duotone";
export const id="dl_c57aa75afa62404fa9c7";
export const url=new URL("../icons/crown-duotone.svg?v=cf8073e464cf8d9b9182e610eee6ebd96325cfe97d1d8a14f87e2f4e5e1e1a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
