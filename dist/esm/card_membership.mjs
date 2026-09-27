export const name="card_membership";
export const id="dl_86a5278de65a74474437";
export const url=new URL("../icons/card_membership.svg?v=49ff669a17b907b51d8dccff462b3f3766c16c08018a2cf229289a4d43ba2a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
