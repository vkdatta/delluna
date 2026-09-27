export const name="foggy";
export const id="dl_75e7f24c561ee47f9a5c";
export const url=new URL("../icons/foggy.svg?v=c57d0f4e9b049c205c073b56b6a5c685159843c65b92ffda27838707c1eccf9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
