export const name="lucid_2-mailbox";
export const id="dl_ae31730e768446a9985f";
export const url=new URL("../icons/lucid_2-mailbox.svg?v=fba75374f4d8f2345c92e86b6306ff98c7c516ed4a495281e2129dc949286dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
