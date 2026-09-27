export const name="dialogs-fill";
export const id="dl_4239a95213c73106865c";
export const url=new URL("../icons/dialogs-fill.svg?v=fb2689f563dc7d0bcef87b4284ec5956011521f571e131001d59b728446ad162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
