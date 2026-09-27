export const name="odt";
export const id="dl_79f372765ed7a68c1fe0";
export const url=new URL("../icons/odt.svg?v=87676ba054944a578947f2b033b7d5d331c444f8511a8e4c0e93ca54086932e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
