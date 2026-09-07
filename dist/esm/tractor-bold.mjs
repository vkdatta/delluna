export const name="tractor-bold";
export const id="dl_2c7bd05415a64badb732";
export const url=new URL("../icons/T/tractor-bold.svg?v=18230af1368b13372bd2a9d505868922101c83bf8e686f3612d04a936ad0eed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
