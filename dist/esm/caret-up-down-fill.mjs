export const name="caret-up-down-fill";
export const id="dl_2519c30663574c568ea2";
export const url=new URL("../icons/caret-up-down-fill.svg?v=6655b7d665f75bb58bc8ecca2b16d326fe031bd69616f9d5e5f8f673093d4833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
