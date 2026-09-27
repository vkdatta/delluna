export const name="folder-duotone";
export const id="dl_e8c20b74a6aa41158d05";
export const url=new URL("../icons/folder-duotone.svg?v=82739879eecff609fe614719d51bd4e0b4fae9271c27b5f89aaad3becb6f3ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
