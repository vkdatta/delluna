export const name="fediverse-logo-light";
export const id="dl_5b125990d7e04385a62b";
export const url=new URL("../icons/fediverse-logo-light.svg?v=4e262433e2f7db371f12ed285a46a8bc0ff5192737d263a31526961405e1c190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
