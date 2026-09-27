export const name="counter_7";
export const id="dl_6c34d4cf417ea16dae59";
export const url=new URL("../icons/counter_7.svg?v=354b4502f31fa6e6061fa0dfc0cd23717b5d7d0e1c9223afb8b99753515726bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
