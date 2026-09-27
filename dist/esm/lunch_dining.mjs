export const name="lunch_dining";
export const id="dl_e208f7d35a5cc88094fd";
export const url=new URL("../icons/lunch_dining.svg?v=d400f81da0f74634d292d05c2c9da7c2e15256e9c86c7101384b9918de13d195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
