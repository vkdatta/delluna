export const name="car-simple-bold";
export const id="dl_21e08d64f93043f39ef0";
export const url=new URL("../icons/car-simple-bold.svg?v=dd3a93659384b9c22650883a160354fe89bb0f2e882c6c7752797d18b83ca3fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
