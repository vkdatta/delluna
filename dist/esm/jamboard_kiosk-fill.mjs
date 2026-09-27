export const name="jamboard_kiosk-fill";
export const id="dl_9d8116967ddf1c83f3ea";
export const url=new URL("../icons/jamboard_kiosk-fill.svg?v=74e27d1e14169c39f56235061f5409ebe6aecb633668649489ca04becb5b2946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
