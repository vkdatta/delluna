export const name="display_external_input";
export const id="dl_b996f76e84f1c849cfcf";
export const url=new URL("../icons/display_external_input.svg?v=e113e1a139734770564f04210e2114d8bf3ffbe397d1300f9ee99425f2eeef2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
