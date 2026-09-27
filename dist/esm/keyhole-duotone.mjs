export const name="keyhole-duotone";
export const id="dl_1028b0e2f7e24e90bc39";
export const url=new URL("../icons/keyhole-duotone.svg?v=43f3e458ea420bf2ba6d3c7cef90278ecbe7fd2092490783ffa3215d0a030f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
