export const name="arrow-clockwise-bold";
export const id="dl_0b62be8a32604e09b682";
export const url=new URL("../icons/arrow-clockwise-bold.svg?v=68d400df12e0808b275edb9f4af4c55c694d36f35dd86f42a3609fa618c570de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
