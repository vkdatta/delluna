export const name="divide-bold";
export const id="dl_95823ce78f6d4304a5ee";
export const url=new URL("../icons/divide-bold.svg?v=3c50ad206f26fed7cffc1a9b5066b2d3375501a31229ffce538bb8c6d4ece54e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
