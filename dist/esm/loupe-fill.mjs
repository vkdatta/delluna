export const name="loupe-fill";
export const id="dl_bc914dec97f9756eae86";
export const url=new URL("../icons/loupe-fill.svg?v=a5317f5bcb6fabc314d67a30a6b256ff50489e879c69aeedea3344065681956e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
