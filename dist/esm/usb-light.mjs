export const name="usb-light";
export const id="dl_a88dbc4b69bc26761d6e";
export const url=new URL("../icons/usb-light.svg?v=8fd0230e66b717e617190e95bef789dc9694fc83bd1e3c2a6dcdd08607836296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
