export const name="head-circuit-thin";
export const id="dl_3ec487d86cd54fe18400";
export const url=new URL("../icons/head-circuit-thin.svg?v=d218458bb07ec3c32f3f2288198c69e7df4d648a3e78b40ed3be83d945b2eea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
