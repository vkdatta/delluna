export const name="hourglass-medium";
export const id="dl_665e67ab74164784b03e";
export const url=new URL("../icons/hourglass-medium.svg?v=3028c80883c13fe80df73972b7016a7960cf1f3546341b40b19de97d5c6e0da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
