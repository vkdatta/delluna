export const name="orange-slice";
export const id="dl_2fcc804910a94f488bcd";
export const url=new URL("../icons/orange-slice.svg?v=fb3f79cf87dcb5a7801ffd7babd30b7c79e4742e59299f36c0e07e12264f2eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
