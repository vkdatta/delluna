export const name="funicular";
export const id="dl_e7fac7c2dd8cf0ff1b4f";
export const url=new URL("../icons/funicular.svg?v=f42b54bbb560cbf9e0348aadbf02b662eb2e4f29923401af30b8d437017e87aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
