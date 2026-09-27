export const name="play_circle-fill";
export const id="dl_0b702fb195a00adcc4d2";
export const url=new URL("../icons/play_circle-fill.svg?v=ff36dfc3c59078551f7aee60cd9edfe54eb53d6d2baa9cda499c7363986f7ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
