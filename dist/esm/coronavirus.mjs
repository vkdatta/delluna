export const name="coronavirus";
export const id="dl_7a98b7ac276943aea696";
export const url=new URL("../icons/C/coronavirus.svg?v=e5509141395e9a4ca08fb7bd3dbdbd9981f1a48652aeb49ae4045d8e69c6b65b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
