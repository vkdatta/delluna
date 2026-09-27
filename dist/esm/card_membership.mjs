export const name="card_membership";
export const id="dl_0b30e1addf4712aa5946";
export const url=new URL("../icons/card_membership.svg?v=543c7717dc318bfde03893b01f62c0696c967b03684cf26fd3a150325b0dcd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
