export const name="summarize";
export const id="dl_39111cdece14c4b31041";
export const url=new URL("../icons/summarize.svg?v=33015135f0ecbfcc5cc9294eb60dae3a16721ca588a3465ff110e410617d24ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
