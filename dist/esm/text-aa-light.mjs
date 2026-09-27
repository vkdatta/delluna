export const name="text-aa-light";
export const id="dl_05477c81d9fa7d8a5eb1";
export const url=new URL("../icons/text-aa-light.svg?v=3fce7f52c7de7809056ce7361a78b67e3276876d9f2096638f08e88aef6ab955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
