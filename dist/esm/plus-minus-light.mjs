export const name="plus-minus-light";
export const id="dl_b22414d3b8b04e7ea602";
export const url=new URL("../icons/plus-minus-light.svg?v=df0515c73b0dba3ac40d7d080a4d362b9aefbeb6257e26962d05823f0049dcb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
