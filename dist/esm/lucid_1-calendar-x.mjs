export const name="lucid_1-calendar-x";
export const id="dl_4ef8d3d005fc4c23a934";
export const url=new URL("../icons/lucid_1-calendar-x.svg?v=9eb4771a1060606e0715e603c767e0ba58d35ad95ea75110bb533563d2e81c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
