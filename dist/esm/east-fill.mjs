export const name="east-fill";
export const id="dl_854b769bae2292c67897";
export const url=new URL("../icons/east-fill.svg?v=274fa35b77c0fb74550ff5eeffe5ea6eaa80685cba2cfd497f4101deb36f63b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
