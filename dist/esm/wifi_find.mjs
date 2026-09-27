export const name="wifi_find";
export const id="dl_e5ef11d2d7962ee3ea04";
export const url=new URL("../icons/wifi_find.svg?v=48de001d5bb213c65e619fbaa8fc4b6d92c38e36e94496e067a0f3cb6d9c3463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
