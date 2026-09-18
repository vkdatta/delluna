export const name="cloud_download";
export const id="dl_0930cbba2c0d4874907c";
export const url=new URL("../icons/cloud_download.svg?v=dcefa4ae126efcf7dd3efca00f15e504ab57289641f1c70e0702749d79c27fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
