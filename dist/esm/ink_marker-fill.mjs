export const name="ink_marker-fill";
export const id="dl_8a80a48d18f6cf3c9fd7";
export const url=new URL("../icons/ink_marker-fill.svg?v=90b6da4f1571b4c3de7d4003eeb912d5f8c232f213926f91ace9de615906236d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
