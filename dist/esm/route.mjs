export const name="route";
export const id="dl_398443c9540874db3e47";
export const url=new URL("../icons/R/route.svg?v=04e2a424f8936854513ac6b0a4be23e706d4497c13a586a695f73cc4941d7ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
