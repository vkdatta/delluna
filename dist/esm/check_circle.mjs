export const name="check_circle";
export const id="dl_7b6c099a115d99080415";
export const url=new URL("../icons/check_circle.svg?v=25272177b0f48fee5c7cc3dc02cf2b06ed5da68996ae116ccd276db1947e4fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
