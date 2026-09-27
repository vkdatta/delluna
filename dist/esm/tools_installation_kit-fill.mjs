export const name="tools_installation_kit-fill";
export const id="dl_30a61a3931ea4733bbc2";
export const url=new URL("../icons/tools_installation_kit-fill.svg?v=d6e596ea871a84977d4d7b94e5a525ad708ec68652be91b0e87ccd9272f3212d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
