export const name="vaccines-fill";
export const id="dl_f945ea4a5078cd9d6c98";
export const url=new URL("../icons/vaccines-fill.svg?v=aa234d23cb7c7de4e9984f8e4b1dfe0b9a96d9bbe8b1f2ab87353c9075906f26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
