export const name="app-window-light";
export const id="dl_3d4f3efc5ca04865ae58";
export const url=new URL("../icons/app-window-light.svg?v=9ea373b34b16fc9de05fc06994e87d11505eb332fca59d61aba82418dd008b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
