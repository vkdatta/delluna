export const name="pageview-fill";
export const id="dl_7a4c535c6a53aad399a1";
export const url=new URL("../icons/pageview-fill.svg?v=a5141270d36ada9b2c70b7b7df1718b7514d6e4fd400a1483010f321db9c4fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
