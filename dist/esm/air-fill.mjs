export const name="air-fill";
export const id="dl_ff29ffe1a2e7b5c4096d";
export const url=new URL("../icons/air-fill.svg?v=914ce9051191361c0a07cd883a44383bdf9328840881f301985f6bbd9e8c6fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
