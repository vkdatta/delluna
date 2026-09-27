export const name="phone_enabled-fill";
export const id="dl_f1f4c18ec819404ae8c7";
export const url=new URL("../icons/phone_enabled-fill.svg?v=fd69f8e2a4fd7fd87fafed8e5ca9d1a32450d1d569e3f755573d27601c1d8569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
