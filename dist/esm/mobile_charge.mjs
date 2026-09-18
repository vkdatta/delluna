export const name="mobile_charge";
export const id="dl_50ef023da43047db8915";
export const url=new URL("../icons/mobile_charge.svg?v=ffc0b76599a6f353b5530af1f18b7ef457f82897bb6491a34384bbdde95ccb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
