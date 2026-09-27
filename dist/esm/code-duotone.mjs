export const name="code-duotone";
export const id="dl_96c98ec5352e4f42ac94";
export const url=new URL("../icons/code-duotone.svg?v=e5e610b14cc1970fc6e115203fdc9c147cb48594ad66b961406e792349d04405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
