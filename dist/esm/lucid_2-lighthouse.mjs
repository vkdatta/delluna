export const name="lucid_2-lighthouse";
export const id="dl_272d129408174198a85a";
export const url=new URL("../icons/lucid_2-lighthouse.svg?v=623907cc81720d2c207a38f0c03040ef69c911355a5beea5dd52589a8a4b9285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
