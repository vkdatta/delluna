export const name="tray-duotone";
export const id="dl_01668a8b7ee99c41325c";
export const url=new URL("../icons/tray-duotone.svg?v=3052788f0b5414ef50ead8224885ed66555dfb633cbe8a0e937ab4cede765e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
