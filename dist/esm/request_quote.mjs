export const name="request_quote";
export const id="dl_db7ff0162953818381c8";
export const url=new URL("../icons/request_quote.svg?v=ee1370b288fc364f00e188ed39befa41c2ae4c005732f3f9f075bcae53b9b5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
