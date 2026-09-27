export const name="offline_pin";
export const id="dl_26c0e375abaa2a682b5b";
export const url=new URL("../icons/offline_pin.svg?v=9c8cb52e23da0d02a4e40107728b5c49207220a428c31fa7be4946dc8570ad8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
