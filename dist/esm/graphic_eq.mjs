export const name="graphic_eq";
export const id="dl_1a4bf2e22163936a30f5";
export const url=new URL("../icons/graphic_eq.svg?v=ddf7e4dbccb27322d6df72aee3961dab9c418eb81aa8036899449db5016cbc25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
