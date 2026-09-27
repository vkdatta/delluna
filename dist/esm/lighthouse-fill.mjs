export const name="lighthouse-fill";
export const id="dl_9a5074ec8c5841c98e42";
export const url=new URL("../icons/lighthouse-fill.svg?v=e5b00cec62964d55b7ea088a4415d497c7fd5c525e829e0cb8266a2ee44c45d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
