export const name="text-h-one-thin";
export const id="dl_9f3fa240fb7fb2f7c5f1";
export const url=new URL("../icons/text-h-one-thin.svg?v=15f1647cbb906f79b309b6425b7555f964e5c16035a65506bf3500f60ee2aabb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
