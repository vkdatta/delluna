export const name="brightness_7-fill";
export const id="dl_2e53028410f6648fbfb5";
export const url=new URL("../icons/brightness_7-fill.svg?v=e899670388d76bc0ec4d3624b29837fde66a0369a1c060671bd43af893f4ab93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
