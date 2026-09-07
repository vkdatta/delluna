export const name="number-square-six-fill";
export const id="dl_55d75b34255b41aea38f";
export const url=new URL("../icons/number-square-six-fill.svg?v=4d516744a2fbcf92cbe68d4ac6ce0d4b57146f782856fbec4db67cef4069edf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
