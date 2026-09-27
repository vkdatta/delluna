export const name="chart-line";
export const id="dl_0c86565a1a4a4aefb647";
export const url=new URL("../icons/chart-line.svg?v=088735d9ea64b6ceb88b4f34e0be2e8bcb145c281867902e9cb20cc1b1261bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
