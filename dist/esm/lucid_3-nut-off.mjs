export const name="lucid_3-nut-off";
export const id="dl_266298d274824d8885ca";
export const url=new URL("../icons/lucid_3-nut-off.svg?v=497729c074645bf0ded8440471905b750248017e93b992455500683864669fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
