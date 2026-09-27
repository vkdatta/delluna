export const name="lucid_3-origami";
export const id="dl_93dcaf8ec9cb48abbed3";
export const url=new URL("../icons/lucid_3-origami.svg?v=db4889ff9820aff0714f74f9020947969565e72e56ed20aeda0cc9fb423cbfe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
