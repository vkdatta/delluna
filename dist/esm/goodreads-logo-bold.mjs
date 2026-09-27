export const name="goodreads-logo-bold";
export const id="dl_f971aed657c9405295bc";
export const url=new URL("../icons/goodreads-logo-bold.svg?v=8e3ffadd1af83ab3eefa392d15a16cf248487d754b8f592e258942442c59f1bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
