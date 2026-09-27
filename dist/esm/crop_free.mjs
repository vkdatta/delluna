export const name="crop_free";
export const id="dl_ebca4edb40109aba8193";
export const url=new URL("../icons/crop_free.svg?v=6d53eee44a844a37a6a24e5308998a79ccf558a03f5bf2f4f3a4c4f1bad5cf15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
