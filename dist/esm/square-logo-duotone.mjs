export const name="square-logo-duotone";
export const id="dl_d262d0d33ce514d57ff4";
export const url=new URL("../icons/square-logo-duotone.svg?v=7dce29b59de28b7c9b33d3ff57f6f8da9b15fec755dffa8f136ab40b6065fa39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
