export const name="dining";
export const id="dl_174f2b27819c882a4d45";
export const url=new URL("../icons/dining.svg?v=ac60959f35ab9f92a550cc10eefa014578d7a35bb414745886f6f51fbb4fde5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
