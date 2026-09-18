export const name="monorail";
export const id="dl_9a6ad78a7f274f0faddd";
export const url=new URL("../icons/monorail.svg?v=053ab3dafe5af615d5b7251ee29dce7a88807d3ad2ff99b020e6ea71bd402934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
