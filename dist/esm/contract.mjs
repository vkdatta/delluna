export const name="contract";
export const id="dl_cc6af346926977235153";
export const url=new URL("../icons/contract.svg?v=6e5efb3d110a71c6f0f048a131efa916d8ba3683bc6dab9a90c3e38371092208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
