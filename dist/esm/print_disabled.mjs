export const name="print_disabled";
export const id="dl_11739a6bef9988aab36c";
export const url=new URL("../icons/print_disabled.svg?v=b4ad53ec7eaeb17ba32711e448cf33c4641ba9c9f8bd1618308c170aea160b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
