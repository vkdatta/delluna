export const name="biotech-fill";
export const id="dl_7b1e7caa10a7a3fae349";
export const url=new URL("../icons/biotech-fill.svg?v=066122a43f8496b8356057bc15e561c329dc988398444d6355f04060e5a8872e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
