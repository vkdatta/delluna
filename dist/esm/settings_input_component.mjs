export const name="settings_input_component";
export const id="dl_f92ba4bb37f7b1ca341c";
export const url=new URL("../icons/settings_input_component.svg?v=9381220152ca9695f9217a672c524d886a0dca68d6c862a0f9a67104618760cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
