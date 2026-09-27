export const name="folder-open-duotone";
export const id="dl_7c27b32d0afe4981aaa7";
export const url=new URL("../icons/folder-open-duotone.svg?v=48341facf8c8daab0a56efd479145dabf2a71c9de65a081eadf682e20cef2390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
