export const name="speed_0_25-fill";
export const id="dl_856a878d92e548cd935c";
export const url=new URL("../icons/speed_0_25-fill.svg?v=6d1569cf55e46ca1700f5e4dd21a1a6577c2414f6fe0aa781be0a335a53ae3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
