export const name="lucid_2-cuboid";
export const id="dl_83790abbd2c64ce08d2a";
export const url=new URL("../icons/lucid_2-cuboid.svg?v=161417ccb74e74ff4533e87b6887c7ee197a3829ad63b6a93d660b9cfccb069f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
