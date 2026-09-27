export const name="signal_wifi_statusbar_not_connected";
export const id="dl_2ccaa5e60cbb3e4bfa12";
export const url=new URL("../icons/signal_wifi_statusbar_not_connected.svg?v=77d9744da5fa233629dd9a654fed8d04f0f0f31dcdec458d61780ee746e86241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
