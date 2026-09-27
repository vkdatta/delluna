export const name="lucid_1-clock-2";
export const id="dl_cc4ad29881cc40d89132";
export const url=new URL("../icons/lucid_1-clock-2.svg?v=66b8596dcd8464e1ced3e2a9889a94f297444b7b5c998cf7ee49cfda2648a154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
