export const name="chalkboard-simple";
export const id="dl_3bfb96946e654cfe8120";
export const url=new URL("../icons/chalkboard-simple.svg?v=979f677cd2f70a02fd51d87904fd43a3cec52984818fd9674eace21e82f6036e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
