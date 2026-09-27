export const name="battery-plus-vertical-light";
export const id="dl_df7c010544bc4058834c";
export const url=new URL("../icons/battery-plus-vertical-light.svg?v=7c9eaaece8cbcc37ddcb606dcb757fbf7f872de1ce94f654b22640d4b194a5a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
