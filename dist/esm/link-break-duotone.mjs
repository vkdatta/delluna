export const name="link-break-duotone";
export const id="dl_7f1e61c5a2f14a0aaf97";
export const url=new URL("../icons/link-break-duotone.svg?v=eca2d809271caacb37cac5900c748aa8bfc1f39d61b8d03c736c330ba57c117e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
