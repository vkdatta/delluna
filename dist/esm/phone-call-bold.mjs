export const name="phone-call-bold";
export const id="dl_6339044eb2d042879b18";
export const url=new URL("../icons/phone-call-bold.svg?v=4df36a70b3cd7e5d4e9e33433fbd2841e3bbd465cd73e2193c865b86a9c1f02e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
