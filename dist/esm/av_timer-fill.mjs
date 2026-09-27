export const name="av_timer-fill";
export const id="dl_6e2c92cbc03e236c1907";
export const url=new URL("../icons/av_timer-fill.svg?v=dca12c2d2f6adb11ca3107a0bc835211186685ad4a10cc3fc9db2d138bf8de4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
