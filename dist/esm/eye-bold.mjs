export const name="eye-bold";
export const id="dl_095f51394d324875847f";
export const url=new URL("../icons/eye-bold.svg?v=766b10b6ed7d8a899a76ba28f3f066ca49e8ce0a75ae68b65bfec0e615d8130d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
