export const name="funnel-x-thin";
export const id="dl_086a514135644ce6b5a0";
export const url=new URL("../icons/funnel-x-thin.svg?v=b4ecb3405600aa46d4876979b86f35a8c2916494835a97477e5c447469240a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
