export const name="funnel-x-light";
export const id="dl_08bf2cfaa3d245f5a21a";
export const url=new URL("../icons/funnel-x-light.svg?v=1480de1cee7620b7d52c10b156600699b78c684707751eaa5f2bbd98ad0ca80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
