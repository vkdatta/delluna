export const name="wrong_location";
export const id="dl_4a0bb054a8e997ee8810";
export const url=new URL("../icons/wrong_location.svg?v=f1da9c088af66ccef87cc405ff1a41df53363b3423aa1df61922755765902e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
