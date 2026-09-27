export const name="chevrons";
export const id="dl_f69cd2bcc85441c9965d";
export const url=new URL("../icons/chevrons.svg?v=0a7b9689037f89f761f3d205d7f8be7f60a3ae5b3479d3bae8ebb8fdf0d31bb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
