export const name="cannabis";
export const id="dl_65848d1387d251864fb0";
export const url=new URL("../icons/cannabis.svg?v=b33b4c79e749e1384b8cd9c88c42bed5fd72f64c82fb281647685578df657665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
