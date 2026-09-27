export const name="thermometer-cold";
export const id="dl_c289b2626153a63d683a";
export const url=new URL("../icons/thermometer-cold.svg?v=06c89a8160ef76737e4e341874cc1cb747ee89a7b174825c4d7dbd2e57ef619d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
