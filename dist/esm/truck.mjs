export const name="truck";
export const id="dl_9b2c7d40d97f4beeb7dd";
export const url=new URL("../icons/truck.svg?v=427afeb186eee3055909f41a61c93f0bb0915e34b713aaa7a28edf8752fff6e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
