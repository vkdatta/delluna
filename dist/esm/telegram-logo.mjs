export const name="telegram-logo";
export const id="dl_59614881ef30ec6a5ebd";
export const url=new URL("../icons/telegram-logo.svg?v=fd2e9f7947d81bd564a7f5f14efa947066f36c7d1fdd4ae32feebde1479e4759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
