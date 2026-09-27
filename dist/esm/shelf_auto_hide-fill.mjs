export const name="shelf_auto_hide-fill";
export const id="dl_96902e7b5765b7dd1856";
export const url=new URL("../icons/shelf_auto_hide-fill.svg?v=511ab97cac3c61a3faa0098425ab1b067612a964ba2b19bb1c3495387177ea16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
