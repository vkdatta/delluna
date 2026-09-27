export const name="lucid_2-lamp-desk";
export const id="dl_e7437dda9aa64b809b1d";
export const url=new URL("../icons/lucid_2-lamp-desk.svg?v=ba5d7dcdd37f53b2e9da648da0a2e7ff68f8f3b770e086622dc72b153638ae8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
