export const name="tornado";
export const id="dl_83daef66cfebd750176b";
export const url=new URL("../icons/tornado.svg?v=4b45fd60ef7260b7ba028ace313745b462f38361b90d0fb7a26cdfe50fc32e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
