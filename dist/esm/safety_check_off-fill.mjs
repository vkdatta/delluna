export const name="safety_check_off-fill";
export const id="dl_e237689c8dd2f52f67e3";
export const url=new URL("../icons/safety_check_off-fill.svg?v=5447f9e104573b8064f54aead751166228d4321d42b8d8f1614ca34203b1ebb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
