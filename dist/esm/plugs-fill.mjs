export const name="plugs-fill";
export const id="dl_9990da2cdfbb4bad97c9";
export const url=new URL("../icons/plugs-fill.svg?v=51352596dd24bd0e188cc0040c3b2846b1dc0c4799877038880c6738e3bec439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
