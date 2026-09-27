export const name="currency-rub-light";
export const id="dl_3d1c456d4f704b0a8037";
export const url=new URL("../icons/currency-rub-light.svg?v=206a13323481f231a0fa5a0649831d05c0a505fbfe8d9884feb458a41f5c22ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
