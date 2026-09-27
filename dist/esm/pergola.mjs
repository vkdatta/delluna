export const name="pergola";
export const id="dl_404e3c36f3e81fc5684c";
export const url=new URL("../icons/pergola.svg?v=c7e375e00534a74c330a7e7f840139a2d084917ccbb70c8a4abeb55885309b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
