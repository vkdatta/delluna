export const name="salinity";
export const id="dl_d92fe6e955587ca381e9";
export const url=new URL("../icons/salinity.svg?v=9fb68f7eca4d1b17217b60f0c939a5766fcd37cf3aa9c406a6c867cb01844d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
