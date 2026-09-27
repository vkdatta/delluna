export const name="keyboard_arrow_down-fill";
export const id="dl_568ca67518fb1bf2cbfd";
export const url=new URL("../icons/keyboard_arrow_down-fill.svg?v=5a81f86c470108aa02506bea861d02cbc54b2500dbc006232bf79680be15cca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
