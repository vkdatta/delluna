export const name="guitar-light";
export const id="dl_f341b97548c6438ba3a5";
export const url=new URL("../icons/guitar-light.svg?v=028e126e6e494856747e9cd91923589599519d240e6e55441d92e074bc4e2d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
