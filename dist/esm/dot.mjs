export const name="dot";
export const id="dl_57f7a8079006438b85a2";
export const url=new URL("../icons/dot.svg?v=e2949e968e09be088954e22fb2f8911e7bf56b298143d31bd4a79cd99e5a77cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
