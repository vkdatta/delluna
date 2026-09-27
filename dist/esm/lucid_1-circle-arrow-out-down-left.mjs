export const name="lucid_1-circle-arrow-out-down-left";
export const id="dl_5e3dd38a560a44adb441";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-left.svg?v=11dce52a0a8401f4aa74d416441d014f4b4c8cfd78e145666fa3fd661b2f6157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
