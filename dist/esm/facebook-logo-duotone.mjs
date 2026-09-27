export const name="facebook-logo-duotone";
export const id="dl_ea71d339878d448980b4";
export const url=new URL("../icons/facebook-logo-duotone.svg?v=ded4069eccf7cd1fae2dba790d0ac79f8c5087402bcdc373999d90e1e51e40cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
