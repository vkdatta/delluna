export const name="court-basketball-bold";
export const id="dl_bfb705b1bc0c4fefbdc1";
export const url=new URL("../icons/court-basketball-bold.svg?v=c3797fcefa05e6ffb74287fb7fd6ca1ff0c21e6fd82db0346f13ffeb0cf9029b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
