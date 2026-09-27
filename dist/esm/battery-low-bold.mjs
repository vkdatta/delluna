export const name="battery-low-bold";
export const id="dl_8b0595076f0d4ec7b36b";
export const url=new URL("../icons/battery-low-bold.svg?v=1b172b24bf314cec07d819eadf8ee1692bbc960ede5ac9d62438afe91bce919f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
