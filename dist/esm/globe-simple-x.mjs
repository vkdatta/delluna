export const name="globe-simple-x";
export const id="dl_561e1b8ae7174a20bad7";
export const url=new URL("../icons/globe-simple-x.svg?v=2715f5306edde5a7a263febd0363aff48c708b0a0689ea3f9ee2b4821957d2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
