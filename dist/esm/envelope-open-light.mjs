export const name="envelope-open-light";
export const id="dl_b6065285cce54200974f";
export const url=new URL("../icons/envelope-open-light.svg?v=0edb3b51e2ae0d7c9f18f4a654b32ffaa22cc6f2827194ca2c8e9ca6f0619a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
