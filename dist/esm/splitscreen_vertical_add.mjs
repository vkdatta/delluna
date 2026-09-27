export const name="splitscreen_vertical_add";
export const id="dl_4f7a4e793a2569000721";
export const url=new URL("../icons/splitscreen_vertical_add.svg?v=ac154e278706323c75ce44b7f9359e8d4146d53030f013b7df26c16037d100d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
