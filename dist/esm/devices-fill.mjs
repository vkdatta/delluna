export const name="devices-fill";
export const id="dl_2b0afa616d0848f4bacc";
export const url=new URL("../icons/devices-fill.svg?v=9198a600c051f27d61947e0d4558eb680f10fd0ff21147ce719c1cb0180c007f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
