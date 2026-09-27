export const name="visor-duotone";
export const id="dl_c40428a02a96b2f7d3da";
export const url=new URL("../icons/visor-duotone.svg?v=0d3ac3223fdcda0b99e060c1b24a90707bcc5ea094375cac4e7122d7a9a18f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
