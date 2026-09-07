export const name="guitar-light";
export const id="dl_f341b97548c6438ba3a5";
export const url=new URL("../icons/guitar-light.svg?v=b5619ec84fd3cde8286838d03302d73f9254b25fcded88e92d49a1e36c35d074",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
