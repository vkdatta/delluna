export const name="start-fill";
export const id="dl_45891358cff3483eaa7c";
export const url=new URL("../icons/start-fill.svg?v=11fdc1da57a2a733475f67c48970a6280533f63be9330af2df733414817ffa9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
