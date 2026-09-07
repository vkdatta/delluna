export const name="headset";
export const id="dl_1718bcf5f63c4a9e81f1";
export const url=new URL("../icons/headset.svg?v=7f2efeda2bd797c8112ca8502582cd4df82da9aef0953540805debbc337c63a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
