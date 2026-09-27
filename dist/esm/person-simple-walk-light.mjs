export const name="person-simple-walk-light";
export const id="dl_959b42308b3641889804";
export const url=new URL("../icons/person-simple-walk-light.svg?v=24375e4b0bf3828b68981b0d005dba1e0f9c6484408af7a9bb759ee306f4c123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
