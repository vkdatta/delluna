export const name="number-zero-light";
export const id="dl_e8574c3bd62a41ec8eab";
export const url=new URL("../icons/number-zero-light.svg?v=24cefb6113322d840cd810f18b6cd408241fd4217a57f18c6137c34b5f44d0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
