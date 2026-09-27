export const name="signal_cellular_1_bar-fill";
export const id="dl_7f3e0876580f6dbfcb39";
export const url=new URL("../icons/signal_cellular_1_bar-fill.svg?v=65f2dc94bf785839711b3278440afe883eeb0a6530e03d9367b35dcdb75af4d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
