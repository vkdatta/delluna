export const name="radar";
export const id="dl_eef440ce5e4cea7c6fe6";
export const url=new URL("../icons/material_symbols/radar.svg?v=68d81852ea7be409f4ce206a46a4e345dee13ea6c9b6f302a750535512deb3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
