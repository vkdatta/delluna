export const name="lucid_1-cloud-check";
export const id="dl_2b3afa16cb0449db8937";
export const url=new URL("../icons/lucid_1-cloud-check.svg?v=0370588505511003f99e0b70a437c3679789c599b8545d7d94b98a431cfadc43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
