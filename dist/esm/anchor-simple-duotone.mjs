export const name="anchor-simple-duotone";
export const id="dl_bf5e36db81f54f309a56";
export const url=new URL("../icons/anchor-simple-duotone.svg?v=b147cd4ee8edaa95d52f68240a4862a630e64eec37a554011aaf9e7e96889a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
