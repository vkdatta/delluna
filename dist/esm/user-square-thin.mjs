export const name="user-square-thin";
export const id="dl_7e59e04e251e73c50769";
export const url=new URL("../icons/user-square-thin.svg?v=b798d83d23d9b092d1a3c9bd0f5eb3e76f367d6206ea5d3c7c098eb7ba414396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
