export const name="tractor";
export const id="dl_dbdbf1fa60974897a24a";
export const url=new URL("../icons/tractor.svg?v=c8fa168bf9cf2a06af3b63780e44e4e9ecc3aeddc338bc62edda14ea995efefa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
