export const name="tray-duotone";
export const id="dl_5082633fc1fc4b6187b7";
export const url=new URL("../icons/T/tray-duotone.svg?v=fcbe602ffbd4bca5514bc008004b5a4136a1b991aadc8910fa440f03b2e6c339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
