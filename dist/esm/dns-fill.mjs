export const name="dns-fill";
export const id="dl_e2ec8b521791ff345aff";
export const url=new URL("../icons/dns-fill.svg?v=1ed25f08927a089e170c93a9e8de7e557da64e90c987d62ded90698693b07758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
