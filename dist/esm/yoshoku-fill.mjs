export const name="yoshoku-fill";
export const id="dl_514b42e51268482baf32";
export const url=new URL("../icons/yoshoku-fill.svg?v=84fdbb20b85798a583bd82bb5a3ee0fed4ec04295fac4d182465750ef0f133e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
