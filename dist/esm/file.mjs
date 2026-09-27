export const name="file";
export const id="dl_cd68687aa5572e33c917";
export const url=new URL("../icons/file.svg?v=b34693a351ec2235d4e5ad78a2ca5c96495deabdb467f51c05b80f3959033c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
