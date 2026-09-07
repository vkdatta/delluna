export const name="file-zip";
export const id="dl_21dd07da9f404d9e99ec";
export const url=new URL("../icons/file-zip.svg?v=f0a32504218438968347f06762eab67a88f9fc87f6d69e6a71e81da00680f135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
