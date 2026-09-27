export const name="dots-nine";
export const id="dl_63f60dfa52b847ed8af0";
export const url=new URL("../icons/dots-nine.svg?v=62cc6b367675f2d39dcaba9dabca6d756aec3f84340c81a412c72144cdab6f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
