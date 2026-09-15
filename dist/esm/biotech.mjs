export const name="biotech";
export const id="dl_83ee19d0dda14b36a05e";
export const url=new URL("../icons/B/biotech.svg?v=4aa2a1a01a114f59ecaa8b35a53fc559f7105f9e1ad99e55ea847c421fef1b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
