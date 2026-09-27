export const name="phone-disconnect-duotone";
export const id="dl_692b18fd4ba64e9faedb";
export const url=new URL("../icons/phone-disconnect-duotone.svg?v=08cfe314d8a3bca097e6e16beb75bb82e2dca105cc856bc12b51fe2b6bb38903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
