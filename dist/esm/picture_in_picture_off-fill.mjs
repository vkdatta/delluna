export const name="picture_in_picture_off-fill";
export const id="dl_6c4305ae08c14400b7e5";
export const url=new URL("../icons/P/picture_in_picture_off-fill.svg?v=e6f7a9b4582e047c8eea25000343091da03850db1e48805d3df8185cc6e5b8eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
