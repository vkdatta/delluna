export const name="wifi_notification";
export const id="dl_a42e1a279cec25b52bee";
export const url=new URL("../icons/wifi_notification.svg?v=7acde56d7ffe0b8057b96e1282b817aba65acf7580d1a591865597a0d435129b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
