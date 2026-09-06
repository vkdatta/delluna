export const name="file-ppt-thin";
export const id="dl_e62c6423182d4118ac07";
export const url=new URL("../icons/file-ppt-thin.svg?v=62926d7faff9f4f4a9a90b1b57df2a2d2391dda588757d4d1fdd68606c1d9231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
