export const name="clock-clockwise-bold";
export const id="dl_a0ed055108234692a13a";
export const url=new URL("../icons/clock-clockwise-bold.svg?v=9945f5cdc1b192a2c852def5d1c24a9e7a6bf687f54f1586004619bd94e90aa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
