export const name="lan";
export const id="dl_7ca963e996e8860907c9";
export const url=new URL("../icons/lan.svg?v=ed5d7ab287cdd86cb672474249aa585ecf5508a7bc8b603cc4567443c20b2051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
