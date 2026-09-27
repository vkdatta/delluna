export const name="settings_alert";
export const id="dl_953fc3499bdbbb22aba2";
export const url=new URL("../icons/settings_alert.svg?v=08d361c07babef9f21cead3ab18197d6286204f4920f26d011c6450b4c89efd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
