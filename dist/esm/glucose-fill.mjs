export const name="glucose-fill";
export const id="dl_3baab3024b1a32d798bb";
export const url=new URL("../icons/glucose-fill.svg?v=d758d83aede5ad381cbc229385a14919f65ae9dc9b439b5d8f23adecc744c31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
