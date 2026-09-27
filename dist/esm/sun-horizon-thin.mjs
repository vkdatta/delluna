export const name="sun-horizon-thin";
export const id="dl_6dbd411f791b8c21e06a";
export const url=new URL("../icons/sun-horizon-thin.svg?v=885389e46d93cbbbe675716ddb5ce1ff6333d11ff0a9c7fbc663b62f343ce2d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
