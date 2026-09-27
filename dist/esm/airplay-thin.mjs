export const name="airplay-thin";
export const id="dl_9f4ebaaeae5047118c6f";
export const url=new URL("../icons/airplay-thin.svg?v=133582f9462f3e3a002fa020d66919fcc0d8121aa8cf9894be05dd4d69df8af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
