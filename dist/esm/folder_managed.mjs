export const name="folder_managed";
export const id="dl_d621ce7d0259198c7c74";
export const url=new URL("../icons/folder_managed.svg?v=dce6bb10f8635ec2ea9088dd4681c442ac40ee6c6987cf6c9075e8f863a8b295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
