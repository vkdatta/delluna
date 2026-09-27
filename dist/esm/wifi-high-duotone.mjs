export const name="wifi-high-duotone";
export const id="dl_ff962816017a78ee2270";
export const url=new URL("../icons/wifi-high-duotone.svg?v=06d7ccb3e9f873f5fdde8a5781cb4d334d02063f0a6c041b3c351cc97f01f799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
