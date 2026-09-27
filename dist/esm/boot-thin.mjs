export const name="boot-thin";
export const id="dl_7fe9395b64fd42ab878a";
export const url=new URL("../icons/boot-thin.svg?v=5483209dc9dbbf929cb26596a6b83dc8d6acb37cc62ce2bd664fc5c0e6da7817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
