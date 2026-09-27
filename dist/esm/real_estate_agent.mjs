export const name="real_estate_agent";
export const id="dl_8021744d57e2769a8594";
export const url=new URL("../icons/real_estate_agent.svg?v=6e97959550337aacf435a54cdf8c3c98a3f09b79bc8bdc88c4b1341eef7e7555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
