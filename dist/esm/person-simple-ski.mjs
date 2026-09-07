export const name="person-simple-ski";
export const id="dl_da1cd0c246924bf08f30";
export const url=new URL("../icons/person-simple-ski.svg?v=e687d2726cf3876d0dabb151a592bf19006dce0397dde64d2a516e29d2799123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
