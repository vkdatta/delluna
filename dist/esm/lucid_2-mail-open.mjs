export const name="lucid_2-mail-open";
export const id="dl_251920c22c4b411994b6";
export const url=new URL("../icons/lucid_2-mail-open.svg?v=44c821db93048df348e85f8df4a8701e4961041619fff38ac7fa951f40097f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
