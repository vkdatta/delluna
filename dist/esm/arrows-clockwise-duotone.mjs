export const name="arrows-clockwise-duotone";
export const id="dl_724c85248f3349a1b2ad";
export const url=new URL("../icons/arrows-clockwise-duotone.svg?v=32e3d1e35733d6ad0f9c03286ca756deb142e43f9cda1e5f36c3e3896b5d37ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
