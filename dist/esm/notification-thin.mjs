export const name="notification-thin";
export const id="dl_e01c8b934425406691f3";
export const url=new URL("../icons/notification-thin.svg?v=f83585510e6e3c717bf4da2f64e539d3510228c84d14b55ccaa27c6f8e6bf56a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
