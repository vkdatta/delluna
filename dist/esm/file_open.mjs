export const name="file_open";
export const id="dl_324656de37ca160935af";
export const url=new URL("../icons/file_open.svg?v=f8bbda7ac2c7aa64fb7cc60903c4a3b059f820708d28d02b56ee815b86a6bc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
