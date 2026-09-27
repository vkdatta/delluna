export const name="person-simple-hike-bold";
export const id="dl_9e5cfe398074441ebeeb";
export const url=new URL("../icons/person-simple-hike-bold.svg?v=c0d6c8ebf1e821bf095fc37c06ab7cebd5e78dcab879b18af037c26cbb143071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
