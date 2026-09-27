export const name="lucid_2-lock-keyhole-open";
export const id="dl_51674b7851a64b4e8a28";
export const url=new URL("../icons/lucid_2-lock-keyhole-open.svg?v=997b7e05be9e6eeaf14c128ef461b8b448203456b1f4b00b92cac94fba4ae665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
