export const name="trackpad_input_2-fill";
export const id="dl_d308728825d1fa18caf5";
export const url=new URL("../icons/trackpad_input_2-fill.svg?v=6010e349b16a1b35733140aa755d31c76efdf3b04c50d0e3fae106c2c62f3333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
