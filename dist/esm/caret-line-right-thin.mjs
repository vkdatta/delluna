export const name="caret-line-right-thin";
export const id="dl_90f750122ddf4278a4e1";
export const url=new URL("../icons/caret-line-right-thin.svg?v=296ef560555442e682404c97a4992e92293a27c43a8ff1ff93ef725f6f3c10c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
