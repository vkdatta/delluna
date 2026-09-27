export const name="directions_railway";
export const id="dl_8607d1b1eecdefad8928";
export const url=new URL("../icons/directions_railway.svg?v=b05b4742fb67aa16f7fe2107170aabb5d903c729cb3864bb3107950ad738c12b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
