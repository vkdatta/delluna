export const name="file-image-duotone";
export const id="dl_32f97d4af89f4b97aef5";
export const url=new URL("../icons/file-image-duotone.svg?v=8e8464cc2ba001a5e95e1217c6bbe0b5cb1dd5d0b000a09da5ff7df3448ee99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
