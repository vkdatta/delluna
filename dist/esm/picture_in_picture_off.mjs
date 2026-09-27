export const name="picture_in_picture_off";
export const id="dl_e665095d8edde93d74fb";
export const url=new URL("../icons/picture_in_picture_off.svg?v=047c569422b02b2b74615998952b90b691f28ec7cc6ff66e77a094059c45d282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
