export const name="lucid_3-pin-off";
export const id="dl_ad44dc7db6eb48bd99e4";
export const url=new URL("../icons/lucid_3-pin-off.svg?v=24552057b3028360e78c19f35e71961fd82600141bd2b317adb7179332e59738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
