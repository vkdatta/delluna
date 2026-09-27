export const name="signal_wifi_bad";
export const id="dl_ad596312ad97ccdb8bf0";
export const url=new URL("../icons/signal_wifi_bad.svg?v=1279b83bdda356ea24bb18863cbb08ba4795e7c8b76b0b7863f4638a448ac2ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
