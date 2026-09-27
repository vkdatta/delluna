export const name="airplay-thin";
export const id="dl_9f4ebaaeae5047118c6f";
export const url=new URL("../icons/airplay-thin.svg?v=d9800658838f7605aef0f6c4dcb029429ad396d41d72a3ef3de33191975f0d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
