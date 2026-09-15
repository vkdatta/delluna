export const name="farsight_digital-fill";
export const id="dl_48d4a811b1084430ae8b";
export const url=new URL("../icons/F/farsight_digital-fill.svg?v=01677bd7b537a5d6db4756df050c9c5c4ff8732a87868996fa5265bd3814c92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
