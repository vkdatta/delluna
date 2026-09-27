export const name="garage_money-fill";
export const id="dl_fad0a7bca0b2d02ac733";
export const url=new URL("../icons/garage_money-fill.svg?v=582fcb630dfccd99c5acad768e1c5078c930c037afe81f8f04a1d0c603d6f00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
