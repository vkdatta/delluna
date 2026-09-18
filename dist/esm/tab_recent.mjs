export const name="tab_recent";
export const id="dl_09ea369ca10f42de8382";
export const url=new URL("../icons/T/tab_recent.svg?v=d331593af7978e8cd4252b63160b1b7126eb0a9006dbbb2f31c6de7fd58f7699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
