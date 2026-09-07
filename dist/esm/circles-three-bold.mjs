export const name="circles-three-bold";
export const id="dl_465594adb30e45a7bfec";
export const url=new URL("../icons/circles-three-bold.svg?v=43e6a5ddc3e9e3258b3606a089fb654a1ac72aff3204e55bbcea7208cf4321ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
