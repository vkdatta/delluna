export const name="folder_info-fill";
export const id="dl_b922d5b03eb28691aa11";
export const url=new URL("../icons/folder_info-fill.svg?v=3e5617291fa3f6ebf788485c43f222df7bb8e6ff162166021a9a3e3f0c45785f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
