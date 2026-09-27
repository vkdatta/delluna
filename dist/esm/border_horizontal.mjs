export const name="border_horizontal";
export const id="dl_c97451778ff6da6ca3f8";
export const url=new URL("../icons/border_horizontal.svg?v=78dff8deb128a9faa1bace05bf4a258b562a956744010713acec5d6e329062e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
