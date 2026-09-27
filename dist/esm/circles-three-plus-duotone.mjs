export const name="circles-three-plus-duotone";
export const id="dl_ee38232649b54373bc31";
export const url=new URL("../icons/circles-three-plus-duotone.svg?v=6b6fc9213a5c0a7ac9a95d97730edc254464ac7c322dbc24413eccfdc94910bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
