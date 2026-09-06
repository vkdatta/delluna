export const name="four-k-light";
export const id="dl_5f4d3ed6fe464fdb8e3f";
export const url=new URL("../icons/four-k-light.svg?v=b09910a09e40edc25937865b734f4ee130e64aa9f6dc2a67275639ecedc201b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
