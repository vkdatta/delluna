export const name="gps-bold";
export const id="dl_4a08d360528d4693ac39";
export const url=new URL("../icons/gps-bold.svg?v=d22c9c8121b76f50bf831b5cfc99c728c2da1970073a19356e06899b679ef7e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
