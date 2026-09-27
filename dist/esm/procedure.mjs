export const name="procedure";
export const id="dl_2f5d0b47141ecd762d18";
export const url=new URL("../icons/procedure.svg?v=b4476131bc03aa6d688b9c2b06fe420e5a3db81876d6a2a9e8cc8c8235bee345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
