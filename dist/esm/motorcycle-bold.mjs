export const name="motorcycle-bold";
export const id="dl_86931d9be8ad4869b68c";
export const url=new URL("../icons/motorcycle-bold.svg?v=32f4f5d7574c1846b795fbf1e2b85b1053c0cdbb0141823e0283e0d084ab9fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
