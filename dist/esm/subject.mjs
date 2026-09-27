export const name="subject";
export const id="dl_8eabca4c933c11d03251";
export const url=new URL("../icons/subject.svg?v=9a30620081018586f0c9efb21bbf4b47e30b493ba9f9594a0cb6f19e4900f8ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
