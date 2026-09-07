export const name="archive-thin";
export const id="dl_18810073af82419f9bac";
export const url=new URL("../icons/archive-thin.svg?v=e8cc9cadc9f2c0973df715bb37c56d3f6c9ea30bd66b8de554e24cba6a2e982e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
