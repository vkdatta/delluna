export const name="file-doc";
export const id="dl_779bb313acd64f3eb2d6";
export const url=new URL("../icons/file-doc.svg?v=e2b599d3f421c01d1bbaefcb0d0691d7fc48d944005f6cc5b98c8cd8247833d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
