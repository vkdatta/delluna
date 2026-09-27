export const name="transgender-fill";
export const id="dl_481be215f30a2a4c5571";
export const url=new URL("../icons/transgender-fill.svg?v=c9136c067197a3b44f6c4898ea28a380b1719bd1bb7bc63c892b103ada811e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
