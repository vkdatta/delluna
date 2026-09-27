export const name="x-light";
export const id="dl_2bbf3b8feb07115d5844";
export const url=new URL("../icons/x-light.svg?v=00c2f2ceb8ec4c6d392cb6921afb70f2c1ad6880cebe88d20ffeb6671172abc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
