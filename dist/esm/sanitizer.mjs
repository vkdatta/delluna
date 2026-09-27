export const name="sanitizer";
export const id="dl_74819f49c8903b891213";
export const url=new URL("../icons/sanitizer.svg?v=fba9fae33a8e33e576afe91b236e8b8da1ef729858cb8f634420039165eb139a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
