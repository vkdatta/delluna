export const name="shield-slash";
export const id="dl_ec591ab02e2edd9896c3";
export const url=new URL("../icons/shield-slash.svg?v=db282578d5b0d5eadceeb79c07a681c131bcab0ab31c489e035b5415afc20edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
