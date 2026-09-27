export const name="number-circle-six-bold";
export const id="dl_70e4c8eab7534702a90c";
export const url=new URL("../icons/number-circle-six-bold.svg?v=6eb2a6104b08f1b58d15e7b0b7b23831ca9aace26348cfaa68fadd96ca24f049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
