export const name="cloud-x-light";
export const id="dl_96e4a578584148a8a859";
export const url=new URL("../icons/cloud-x-light.svg?v=cdf1f9e909ed7fba3305a82f71bd7f7627e41b145eb434e5cb2472d75f29768c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
