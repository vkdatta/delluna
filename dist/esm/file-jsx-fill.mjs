export const name="file-jsx-fill";
export const id="dl_e8c3eb15a2a148599e34";
export const url=new URL("../icons/file-jsx-fill.svg?v=541a67fce20a5167c701c9adcf085334257b7de6a5c88545d9db9f03257a2fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
