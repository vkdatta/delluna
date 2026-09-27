export const name="lucid_3-replace-all";
export const id="dl_679ad55e35ba436a9015";
export const url=new URL("../icons/lucid_3-replace-all.svg?v=3b1ce58927dd0d610d09a4882564bbb2ed54b5ae81938c68210f826757ed2576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
