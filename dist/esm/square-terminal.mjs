export const name="square-terminal";
export const id="dl_c41b627bbe03414580a0";
export const url=new URL("../icons/square-terminal.svg?v=7e73764c7b61769413118a5e590c21e805f9a17e8fe2e17b5384813c4a8c7310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
