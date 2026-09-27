export const name="speed_2-fill";
export const id="dl_23713b129c132cc75d12";
export const url=new URL("../icons/speed_2-fill.svg?v=a2c2e97664abe7e93a9b37016dabcd777731093799d7678630cb3a86a485ba0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
