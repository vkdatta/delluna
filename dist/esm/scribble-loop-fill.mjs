export const name="scribble-loop-fill";
export const id="dl_32bf4d3c607f2ff17114";
export const url=new URL("../icons/scribble-loop-fill.svg?v=f7e959e7bb3761742b2885e427c83428939a487dad80811f052b68e23a26f79b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
