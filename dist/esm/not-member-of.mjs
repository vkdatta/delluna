export const name="not-member-of";
export const id="dl_63cf7aba3f014523bad3";
export const url=new URL("../icons/not-member-of.svg?v=38ff5d5f2b55ce4d218dea556dccba54fc72071b39fadcf7faeb1cc4a9bbb361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
