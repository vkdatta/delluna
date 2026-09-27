export const name="edit_arrow_down-fill";
export const id="dl_1b2f6d642afb3cda5ab1";
export const url=new URL("../icons/edit_arrow_down-fill.svg?v=bb0d998a477c2ef0dc5e820086d4211922abae7bbe6c0354cc4f90dd63a35752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
