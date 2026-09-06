export const name="pix-logo-fill";
export const id="dl_a88cfbcaebbf48f08c01";
export const url=new URL("../icons/pix-logo-fill.svg?v=1eeb88ef54297559f1e6f0ffba9b2c92d43a67addd593c792c3e1c27113afd24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
