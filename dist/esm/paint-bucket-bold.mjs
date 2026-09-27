export const name="paint-bucket-bold";
export const id="dl_64f19a8857744d92be5c";
export const url=new URL("../icons/paint-bucket-bold.svg?v=a2f2aa733f1174ae5510dc0d44e445f7f12c528b636e40bfc7f82264220bfde9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
