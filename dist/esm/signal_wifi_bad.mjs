export const name="signal_wifi_bad";
export const id="dl_0c3d75a1b56b82cd01e2";
export const url=new URL("../icons/signal_wifi_bad.svg?v=774d9b56c435a7ec1a9038160bd078a046c4bad87e64e14b536297c8c3d6c1d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
