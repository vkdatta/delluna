export const name="layout-duotone";
export const id="dl_338697087ea8477cadcb";
export const url=new URL("../icons/layout-duotone.svg?v=8a3844d6e84b62e45d2fa2daf83c9dbe9f1a4ec61ab0807eeb7ad3b118716d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
