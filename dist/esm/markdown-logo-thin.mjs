export const name="markdown-logo-thin";
export const id="dl_78feb9f174f7469e9b75";
export const url=new URL("../icons/markdown-logo-thin.svg?v=3ecbf9228f312f1ca34798a64589b610d79eb1feb125130663c2a911f9a2b8e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
