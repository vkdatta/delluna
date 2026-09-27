export const name="screwdriver";
export const id="dl_86751a01cfe0f2d46740";
export const url=new URL("../icons/screwdriver.svg?v=a4ec47958267181bda8454209e886c5b8611127257b370115620fe34d6ee571f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
