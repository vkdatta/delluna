export const name="tooth";
export const id="dl_1b29d74482694e0297c8";
export const url=new URL("../icons/T/tooth.svg?v=05db68011468b841e8dcc6c44de8f46811dd6c49aeca51613f5b2a4ea796dced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
