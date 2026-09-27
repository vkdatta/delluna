export const name="lucid_1-archive-x";
export const id="dl_21b8d986d61244e99998";
export const url=new URL("../icons/lucid_1-archive-x.svg?v=7304c589bde682b5e75ae1920b917b2e6abc0e07258cb2a310a7185c9bd6249b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
