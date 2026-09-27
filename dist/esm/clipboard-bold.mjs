export const name="clipboard-bold";
export const id="dl_a87998e9fb704b639900";
export const url=new URL("../icons/clipboard-bold.svg?v=1fde94d5c5dc6396decd4db171f0348cdc6311561a4383ebc65eb9cb6ab29557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
