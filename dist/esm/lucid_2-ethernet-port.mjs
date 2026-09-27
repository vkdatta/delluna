export const name="lucid_2-ethernet-port";
export const id="dl_8c0ae73f8c4d4856aef8";
export const url=new URL("../icons/lucid_2-ethernet-port.svg?v=1706179e35f65499aeeb6671e1b422b7e9fb2c9d8bc09dcf7ffc7f2464574165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
