export const name="design_services-fill";
export const id="dl_8c653274f6d3465095e9";
export const url=new URL("../icons/design_services-fill.svg?v=6a1accc0ace2a4c7637112d7987516b78e5fe2be4d5e74f8cc5f1cfd255e3cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
