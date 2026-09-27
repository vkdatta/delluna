export const name="filter_5";
export const id="dl_aadb241e23e31b11ab21";
export const url=new URL("../icons/filter_5.svg?v=8b1e1b91ed089cba33f5c4c36d8b213e7ab7ad07cab567d1ae2efb1f265fa658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
