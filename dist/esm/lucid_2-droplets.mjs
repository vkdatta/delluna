export const name="lucid_2-droplets";
export const id="dl_a0fe2834753b4bfdbffc";
export const url=new URL("../icons/lucid_2-droplets.svg?v=532961d105d9ede1c6c33945d0c8da35860934ff97849ec434a837be9333bf7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
