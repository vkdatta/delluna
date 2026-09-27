export const name="ventilator-fill";
export const id="dl_3593a406359b245fc131";
export const url=new URL("../icons/ventilator-fill.svg?v=200f3f57e0a8b02281e520e5cfa73783872c100d7b123cff870d7db9e7c2db06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
