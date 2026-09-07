export const name="lucid_1-book-type";
export const id="dl_a03602bf3da34d01be0d";
export const url=new URL("../icons/lucid_1-book-type.svg?v=1b9a0e6b2a95ac1582f35eb2ca7e91b2afc3c0dd77b740cb4624d09202140caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
