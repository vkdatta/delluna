export const name="read-cv-logo-fill";
export const id="dl_51eeaaedb6314e6abdd9";
export const url=new URL("../icons/read-cv-logo-fill.svg?v=90f7fe57bc272554201698b6dc533499ae80765d67dfb9781301afa4aac9e8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
