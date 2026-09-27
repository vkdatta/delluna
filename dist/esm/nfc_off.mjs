export const name="nfc_off";
export const id="dl_ba820b5b5f57db67b646";
export const url=new URL("../icons/nfc_off.svg?v=d4d77cc97783536fad56f4869cfc54c6e83373d90a4f2a41e2390953b2cc27b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
