export const name="high-heel-bold";
export const id="dl_5972db37eaf8428ea5f7";
export const url=new URL("../icons/high-heel-bold.svg?v=57fe433f7d29cc18c55f0295afde9d355ff353c674d685e566d750a3257866b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
