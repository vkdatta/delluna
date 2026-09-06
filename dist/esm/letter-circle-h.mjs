export const name="letter-circle-h";
export const id="dl_bfb25cc51be649ffa49d";
export const url=new URL("../icons/letter-circle-h.svg?v=3f1f53ac8bdfc5b7ef2e0da112b6c7321fe145ce5f90ba8d6e56e122ee43237c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
