export const name="app-window-bold";
export const id="dl_d88aa8bc3fed46e89bc1";
export const url=new URL("../icons/app-window-bold.svg?v=9699658870978f454691af85a97ae59e0089161a5af0f2320d8a6e1b822ae2c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
