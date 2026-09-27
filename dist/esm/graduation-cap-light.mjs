export const name="graduation-cap-light";
export const id="dl_7a15842a54f54992a876";
export const url=new URL("../icons/graduation-cap-light.svg?v=9fc00701828b158012b22697925181d4654b6c1e376f45c192fabeb743297280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
