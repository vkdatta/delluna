export const name="square-half-bottom";
export const id="dl_9ac1a3923e444a953a4a";
export const url=new URL("../icons/square-half-bottom.svg?v=da33e2966a278098fac84005b8be68102ee21a0a94de6154e2df0e798ca3c512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
