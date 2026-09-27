export const name="landscape";
export const id="dl_dd8a73f2a80731b5a62a";
export const url=new URL("../icons/landscape.svg?v=d2069c68f4a53dcc519794e58fd1ca1b1f4a1a5ec4a5062a7c45fc74c6e57920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
