export const name="eject-simple-duotone";
export const id="dl_085f9c67f0594a62a5e0";
export const url=new URL("../icons/eject-simple-duotone.svg?v=97ffce3ef4d5ac7daf625facd47dbb14f37ed4352dba95f98b8223a0e8280af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
