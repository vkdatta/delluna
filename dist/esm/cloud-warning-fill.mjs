export const name="cloud-warning-fill";
export const id="dl_4f98e0c2cb1849ada8a8";
export const url=new URL("../icons/cloud-warning-fill.svg?v=c8441e77cf5a94bb9950fcd028ab6861493f28e934055002f9f2dd1216703341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
