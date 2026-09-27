export const name="tag-fill";
export const id="dl_d74ac2935f93868dbaf3";
export const url=new URL("../icons/tag-fill.svg?v=4656fcbbdda53689e5888eb98721e1dcb9c0485c4c8eae09af6f6caa3ff4125c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
