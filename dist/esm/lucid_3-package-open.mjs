export const name="lucid_3-package-open";
export const id="dl_c9491e129ef54a57ad5a";
export const url=new URL("../icons/lucid_3-package-open.svg?v=bb88972a6e897fe7aa41efb0bff8c0b2aa5c84930513455471fd75c75be2c89c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
