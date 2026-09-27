export const name="folder_info";
export const id="dl_90807cdd9b2881142c2e";
export const url=new URL("../icons/folder_info.svg?v=a81af201f36214da0fe2e72d3e7462faafd2fb5f95b0fcc84a050930803796ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
