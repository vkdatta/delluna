export const name="emergency_share_off-fill";
export const id="dl_387aed47108a487a98ab";
export const url=new URL("../icons/emergency_share_off-fill.svg?v=bcb0549edf34acf36858a3f86d6f97b499f7f3cc9595fd3174e5cce1cb3f389f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
