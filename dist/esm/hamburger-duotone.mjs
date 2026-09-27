export const name="hamburger-duotone";
export const id="dl_680d999619974fcd8fdc";
export const url=new URL("../icons/hamburger-duotone.svg?v=697c922b32469d7431b120c6e526102c33f52abdf0b047b60784b00cd742968a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
