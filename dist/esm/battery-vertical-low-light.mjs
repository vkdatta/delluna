export const name="battery-vertical-low-light";
export const id="dl_4ac57fa6a3b947f2956a";
export const url=new URL("../icons/battery-vertical-low-light.svg?v=ea2b5c55bcd46e24d12a9ba478a84e32d17cf98981bf887faec9e0e2a0d679b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
