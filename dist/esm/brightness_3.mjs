export const name="brightness_3";
export const id="dl_4a39909c831d42bc9812";
export const url=new URL("../icons/brightness_3.svg?v=ca074bf9e08b8037ae81e454a6bbe1b1cdb58b5420944ce3886cb72da9596515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
