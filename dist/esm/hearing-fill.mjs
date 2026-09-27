export const name="hearing-fill";
export const id="dl_02bc03a13d340b1ba6ba";
export const url=new URL("../icons/hearing-fill.svg?v=c5c670b60030bd06abae8d265cf0ffb364496c2f0381209945dbf2cd84c1a7d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
