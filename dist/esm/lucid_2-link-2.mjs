export const name="lucid_2-link-2";
export const id="dl_984bfef8abdf48f79539";
export const url=new URL("../icons/lucid_2-link-2.svg?v=6672a440879cadbd27354abe512abfd68b62ec3bd4a7145ec4e28811bf32d71c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
