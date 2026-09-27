export const name="summarize-fill";
export const id="dl_4e93fe4306ffb2f1e15a";
export const url=new URL("../icons/summarize-fill.svg?v=fc4d3edaa3bb47ffcdf1dd7f75d4207b7b2de25defc853363ba14befd2bb4f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
