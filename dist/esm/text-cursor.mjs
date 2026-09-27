export const name="text-cursor";
export const id="dl_4228c34cc73549398999";
export const url=new URL("../icons/text-cursor.svg?v=853047c606490f70eb80ba8e80ab50ed18c407da7bf93864a7daace9f06c13b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
