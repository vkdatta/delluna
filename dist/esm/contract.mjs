export const name="contract";
export const id="dl_934bb248f08c4a980000";
export const url=new URL("../icons/contract.svg?v=6e2adf112ae8c04c32ae4ee7082fbf6d065e5d5145fd0ead1599b821510662b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
