export const name="plug-bold";
export const id="dl_8cca5cd2c66b4d8c8438";
export const url=new URL("../icons/plug-bold.svg?v=bcf0c6fc807ce6f35551c9b2285e7cfcf8b86381d7da9e569d843c9512c15266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
