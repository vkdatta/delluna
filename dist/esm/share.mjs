export const name="share";
export const id="dl_374bc08122f95d7e7b13";
export const url=new URL("../icons/share.svg?v=71258f5d94ddd422f2b8be7d5530e06589bdd18a9ed84c575ea2d2ed4889ef4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
