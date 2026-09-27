export const name="file-zip";
export const id="dl_21dd07da9f404d9e99ec";
export const url=new URL("../icons/file-zip.svg?v=266eeecc7c1aa36b15aee16a85123a23ba1b27de54af2f31971a48008e5094cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
