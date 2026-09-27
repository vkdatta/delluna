export const name="file-tsx-thin";
export const id="dl_512b9f68372f416fb827";
export const url=new URL("../icons/file-tsx-thin.svg?v=30c539b66cfddc82ad434ca23a492b606d3d0d9f6bc6a3e360b51b9e91d659c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
