export const name="lucid_1-calendar-x";
export const id="dl_4ef8d3d005fc4c23a934";
export const url=new URL("../icons/lucid_1-calendar-x.svg?v=3fe800b2ba5cd3b60d9fb850b4ac2e56444fb62e01ee048c1f7c933e956cf86f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
