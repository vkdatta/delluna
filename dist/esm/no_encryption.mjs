export const name="no_encryption";
export const id="dl_5015c7baddbaf27da5d0";
export const url=new URL("../icons/no_encryption.svg?v=343061ac6ad3833a37b96e0ba865ac2ffefaa5264374695a99f86706e339e726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
