export const name="file_copy";
export const id="dl_acb452c37517f1593eb8";
export const url=new URL("../icons/file_copy.svg?v=a929e9ff23a1aea2ce6a630ec9896d4ed9f633ae2e0fb755ea7161e4206c6893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
