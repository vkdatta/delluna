export const name="sip-fill";
export const id="dl_68b5473a0c924bac8aa0";
export const url=new URL("../icons/sip-fill.svg?v=b1926c61fb9eb942abdbaaee81dd31b205e00d4716905908256b49c7cbcb15c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
