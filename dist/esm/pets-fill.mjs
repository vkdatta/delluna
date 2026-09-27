export const name="pets-fill";
export const id="dl_db05415d3f89b11f5b94";
export const url=new URL("../icons/pets-fill.svg?v=c5cb27e5d12dd2feea96a603217fb12768251752ea448a38836c3ad8c5d6800d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
