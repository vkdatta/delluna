export const name="gender-neuter-fill";
export const id="dl_6372a6b22db64c05ab69";
export const url=new URL("../icons/gender-neuter-fill.svg?v=3be0b90498ea1309aaf64586b9be1ce62b9ec6eae249e7ddb0c51cc6f6f42be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
