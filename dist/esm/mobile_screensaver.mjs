export const name="mobile_screensaver";
export const id="dl_6fe66e846b11475945f2";
export const url=new URL("../icons/mobile_screensaver.svg?v=95d26c4aba4765841a6acaa39ce50f4c36f44cd7e5c0aa610811ccae444cc60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
