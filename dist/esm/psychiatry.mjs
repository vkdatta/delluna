export const name="psychiatry";
export const id="dl_92e2432aea74be78ac6a";
export const url=new URL("../icons/psychiatry.svg?v=472648acd6baed73be60a82c940add47297adc66999adad5f61cedf36aba8395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
