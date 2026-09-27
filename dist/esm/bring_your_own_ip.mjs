export const name="bring_your_own_ip";
export const id="dl_2352026f278ed2dfd10e";
export const url=new URL("../icons/bring_your_own_ip.svg?v=27730c541ec2175dc8dd53c91407c55d148c5660cafd89381f23a419b621617b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
