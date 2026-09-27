export const name="swap_vertical_circle-fill";
export const id="dl_6374fb00edfde03f3c31";
export const url=new URL("../icons/swap_vertical_circle-fill.svg?v=5be230076e9fa424f355668ef0e16501b06d593358de001a8870af3544b8436c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
