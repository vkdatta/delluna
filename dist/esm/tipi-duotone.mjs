export const name="tipi-duotone";
export const id="dl_15043c3be057753b1342";
export const url=new URL("../icons/tipi-duotone.svg?v=59606acc70dcf055f35f49b9e4f4e92df7a3cf1bf68f31d57e64ebea85679907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
