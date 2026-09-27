export const name="briefcase-metal-fill";
export const id="dl_8e9366e98a1a460a8aaa";
export const url=new URL("../icons/briefcase-metal-fill.svg?v=d3133ef7c534658a5bde1ef31c8e501154529b28052dea7e8c7556d726ee63f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
