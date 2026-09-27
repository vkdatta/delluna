export const name="contact_page";
export const id="dl_b324342301a88490c9ac";
export const url=new URL("../icons/contact_page.svg?v=33431d47b9e32379a5ade8985bce4b19321eca095c04d1db536cf3fda8c2c9b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
