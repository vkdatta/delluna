export const name="scales-bold";
export const id="dl_6189fd115bd254d026ef";
export const url=new URL("../icons/scales-bold.svg?v=0a1ed72d861d73b771131f00a974a11180d65ceb0019c3ac6befc8e8de41d52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
