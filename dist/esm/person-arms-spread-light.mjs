export const name="person-arms-spread-light";
export const id="dl_8a3e077418e1427bb44e";
export const url=new URL("../icons/person-arms-spread-light.svg?v=fbe56d896d731517ec0c867b1a37d63c08d0ac06d9600d4714a06daac4649752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
