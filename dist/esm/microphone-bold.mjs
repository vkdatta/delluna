export const name="microphone-bold";
export const id="dl_2585d5535f184c8f9d3d";
export const url=new URL("../icons/microphone-bold.svg?v=9ba45998d4779026ad3d49dcb3f3f3075137df3115d58a7f5b92f861e02d6dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
