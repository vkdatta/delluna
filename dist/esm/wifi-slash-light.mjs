export const name="wifi-slash-light";
export const id="dl_0f072603b0f589c51ead";
export const url=new URL("../icons/wifi-slash-light.svg?v=b57f7b6e944ccadc2d3077f09b90cc7363384a458ab0c021af1f3d785e3f12dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
