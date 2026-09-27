export const name="school-fill";
export const id="dl_45f753d5677b4e94f16a";
export const url=new URL("../icons/school-fill.svg?v=29e57032221b4451d511e2f1576d4d14754cd77715cf6a33e14ca68342960953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
