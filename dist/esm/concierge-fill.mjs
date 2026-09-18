export const name="concierge-fill";
export const id="dl_c88336bc5619403b8ed1";
export const url=new URL("../icons/concierge-fill.svg?v=1701480c37b3ff8d2c2e6156757e58b2cb945f6723a8cd1018110caee38c92a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
