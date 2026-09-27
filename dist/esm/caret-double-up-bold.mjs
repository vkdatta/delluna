export const name="caret-double-up-bold";
export const id="dl_d9c045cbf12a4a6aa1e2";
export const url=new URL("../icons/caret-double-up-bold.svg?v=612e7111f114b72eeb6c5c582476b3545efcd4976e63796be5ce518ccd6e7113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
