export const name="family_link";
export const id="dl_805e596de3fc5014efd3";
export const url=new URL("../icons/family_link.svg?v=0bddaff71dae74b9a47d3bbd4a47dd0255d8c7c366387bbec70bcd749a0c8536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
