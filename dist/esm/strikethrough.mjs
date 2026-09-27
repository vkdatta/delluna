export const name="strikethrough";
export const id="dl_1bec68d538c2490daa10";
export const url=new URL("../icons/strikethrough.svg?v=791a71f440f86baed782ddf65eab277975c41c14665815de4274353a269c8dde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
