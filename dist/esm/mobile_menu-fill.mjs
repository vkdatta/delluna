export const name="mobile_menu-fill";
export const id="dl_c86366025ce7da6b2908";
export const url=new URL("../icons/mobile_menu-fill.svg?v=7e835cfc3edd0b610f182886b0aac6f361ad024c76c7b9d3c59b699f54839a1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
