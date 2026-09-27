export const name="scribble-loop-thin";
export const id="dl_e29781f4ca35bb60cbb3";
export const url=new URL("../icons/scribble-loop-thin.svg?v=dc813b0d4e1b75a7ecae072f285867d1540f97f9b0a50dbd8b93570c2dcf17b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
