export const name="shopping-bag-open-bold";
export const id="dl_c75993fd0ebb7ec51384";
export const url=new URL("../icons/shopping-bag-open-bold.svg?v=0b38608d0bbbaccd32427f6365b6f9bf025431fa408bf5d116391d48fdf2a1de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
