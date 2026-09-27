export const name="file-ppt-thin";
export const id="dl_e62c6423182d4118ac07";
export const url=new URL("../icons/file-ppt-thin.svg?v=9f208b25583415ed2198c44d3254f7b6b7d3d7853ac2e88967ad1e98c00a980d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
