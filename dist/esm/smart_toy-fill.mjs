export const name="smart_toy-fill";
export const id="dl_56ae972dc67c2570536c";
export const url=new URL("../icons/smart_toy-fill.svg?v=38cb5add2fd5442b5dd416c1c0204a1766eaf5ce6133890387e08089d40bd4b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
