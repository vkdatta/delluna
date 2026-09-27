export const name="blueprint-duotone";
export const id="dl_ea0492c0d1f245a88af2";
export const url=new URL("../icons/blueprint-duotone.svg?v=e954b83a338c925eeb4a55acb9214538ae6a82e03d61126057392e342d0999e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
