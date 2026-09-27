export const name="tray-arrow-up-thin";
export const id="dl_f8e2a00c960efb9d0619";
export const url=new URL("../icons/tray-arrow-up-thin.svg?v=de70d87556ae99d6070af2ee69b9a66f3758f1922a5f6ca3c4e0e80e57b055e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
