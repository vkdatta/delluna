export const name="polygon-bold";
export const id="dl_152ea6bc145f49059a60";
export const url=new URL("../icons/polygon-bold.svg?v=87b601a926b7b02767ceb5fb63ed892bbf769faecea7c98b1b7c48b06d95b61e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
