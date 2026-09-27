export const name="archive-duotone";
export const id="dl_9dfe3a3576634200a730";
export const url=new URL("../icons/archive-duotone.svg?v=952ec0da3848dfc7ce42104abfce0aa1164a789fdb78aa627b59f62851512ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
