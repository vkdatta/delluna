export const name="cloud-arrow-up";
export const id="dl_e18cb489ea374e97ba4c";
export const url=new URL("../icons/cloud-arrow-up.svg?v=9c95de21875e3df554fbb22e671f3caac0f5aed9352d644d485c5817c4a85bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
