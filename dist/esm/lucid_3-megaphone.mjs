export const name="lucid_3-megaphone";
export const id="dl_d42799d345aa42f28a4e";
export const url=new URL("../icons/lucid_3-megaphone.svg?v=b2ef5328a7e3331a58d8ca48015b8db82dafab9319d1e93ca417c8319352c76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
