export const name="folder_eye-fill";
export const id="dl_680bd65d51074348978f";
export const url=new URL("../icons/F/folder_eye-fill.svg?v=afdd19b21bcd973613477f5d129ca30052ca68afd8c29fd8584a12653fbae3a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
