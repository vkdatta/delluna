export const name="recycle-duotone";
export const id="dl_a45729d268b94a14a7ac";
export const url=new URL("../icons/recycle-duotone.svg?v=8fff24ae032094288647f0f79dc0051e0e882d8a897c60837be7fdba78fed0a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
