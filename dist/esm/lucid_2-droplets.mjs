export const name="lucid_2-droplets";
export const id="dl_a0fe2834753b4bfdbffc";
export const url=new URL("../icons/lucid_2-droplets.svg?v=cbb33f7d8d136d12b97291a8207b94404979a914a23c39d475dff89fa72e70e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
