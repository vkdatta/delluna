export const name="swap-light";
export const id="dl_a0b8a490c4fba7e4c632";
export const url=new URL("../icons/swap-light.svg?v=1f32c36b4a2e3acc77b576b901356d4bffb7dc009ba4af8ce308604ec73a8e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
