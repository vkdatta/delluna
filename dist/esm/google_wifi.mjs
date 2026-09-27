export const name="google_wifi";
export const id="dl_10eb1875566fbd5b14a2";
export const url=new URL("../icons/google_wifi.svg?v=aac43530e1b007b7afc1e3783d1561dcefecfab73170370a3560403bb242f246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
