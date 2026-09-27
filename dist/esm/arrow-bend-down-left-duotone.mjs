export const name="arrow-bend-down-left-duotone";
export const id="dl_4a46af4f398b4f408594";
export const url=new URL("../icons/arrow-bend-down-left-duotone.svg?v=9f50ce5666ea1116db6dd0bd8d5c313095fde266eb4ace3385bb4cd553f99eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
