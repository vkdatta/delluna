export const name="phone-outgoing-fill";
export const id="dl_c173ceb9a0884cf18c10";
export const url=new URL("../icons/phone-outgoing-fill.svg?v=65ca04266b77ca0bc57196156a46d970bb5f1bdbce14cb5b0f44dc38df0cd172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
