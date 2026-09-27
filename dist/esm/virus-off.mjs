export const name="virus-off";
export const id="dl_7bcd80a58d4246a3939e";
export const url=new URL("../icons/virus-off.svg?v=a8a86b15b5470770163ea11aa10b7cf6e3353309c130a1d58bad84daf30c8266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
