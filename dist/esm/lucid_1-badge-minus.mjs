export const name="lucid_1-badge-minus";
export const id="dl_4e48823cd578451e883d";
export const url=new URL("../icons/lucid_1-badge-minus.svg?v=ba11681acee6cf8a46d3e9e58d583735883355bf64b079d22d41f575ccdbec7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
