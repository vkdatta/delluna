export const name="report";
export const id="dl_fe173c3dcd39091abeaf";
export const url=new URL("../icons/report.svg?v=46c7989fb6c36f6a10867f25b4188fdb4c747eb28cd79c91fb608b067ecf169c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
