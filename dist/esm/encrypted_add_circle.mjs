export const name="encrypted_add_circle";
export const id="dl_e2cda3086df87c55b65d";
export const url=new URL("../icons/encrypted_add_circle.svg?v=c613630da79b89a22dae1e563fb205af1e91feb3508c7a3ca706589c15b77d9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
