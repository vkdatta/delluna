export const name="letter-circle-v-fill";
export const id="dl_8207e13c6e194f3a8148";
export const url=new URL("../icons/letter-circle-v-fill.svg?v=33712af6749e7b02d225589caae7d9763d54b0b88b478674ff1b6a2364b0972f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
