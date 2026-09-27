export const name="view_apps";
export const id="dl_ec98d7e37f289186fb7a";
export const url=new URL("../icons/view_apps.svg?v=03141d055ebfec0ccfa5621db76c84b33a43d93686342c0cfe9f0c628cdbfeaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
