export const name="wifi_lock";
export const id="dl_d3db20da4bb146be8924";
export const url=new URL("../icons/wifi_lock.svg?v=77085b76fa51657a0ac1eea8b11f427e15a365a278109e8fcef789b2cbf4c758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
