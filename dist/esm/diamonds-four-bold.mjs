export const name="diamonds-four-bold";
export const id="dl_254c804de800451a94df";
export const url=new URL("../icons/diamonds-four-bold.svg?v=cb08d70849cb02ee42f542b2c47036176b708f217c01a3fbd274d4c820c285a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
