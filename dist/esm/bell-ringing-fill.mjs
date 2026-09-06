export const name="bell-ringing-fill";
export const id="dl_614eb91ec2fc406e8060";
export const url=new URL("../icons/bell-ringing-fill.svg?v=089431e7d4e6ff10ad909ee7d842a93fd36487cb43b50b4443c19b24c7fde001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
