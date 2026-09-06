export const name="backspace-fill";
export const id="dl_15ac82caa97543d095bc";
export const url=new URL("../icons/backspace-fill.svg?v=2fa17c16e6fe4f82ac9f5f8701565be8e86e66f18015fed43dad2453a72a6655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
