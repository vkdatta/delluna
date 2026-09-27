export const name="battery-low-light";
export const id="dl_a6bde4646f1a4de298dc";
export const url=new URL("../icons/battery-low-light.svg?v=8e408d0d5e3baf8861944e2cc6f865e4e0b88699312c4db46c82f8450aa735db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
