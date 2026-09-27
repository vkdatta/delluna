export const name="view_apps";
export const id="dl_6e1b5fa0bb8d8c1ecfa1";
export const url=new URL("../icons/view_apps.svg?v=1c323391c1a6f28124151bd67d7681b50c3c980c97be0bab8c02e609b994cd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
