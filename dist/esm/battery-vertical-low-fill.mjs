export const name="battery-vertical-low-fill";
export const id="dl_ccad6722049d42b7a3ba";
export const url=new URL("../icons/battery-vertical-low-fill.svg?v=d22d91fd5103155f63652271a96209652b8060ff7235f3933b9dd4677842f960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
