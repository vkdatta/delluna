export const name="tray-arrow-down-duotone";
export const id="dl_4618c4540762426c8a66";
export const url=new URL("../icons/T/tray-arrow-down-duotone.svg?v=ab71b50442e4c8273034d18b48321860406f74a9a3cc4fb306720857d795a94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
