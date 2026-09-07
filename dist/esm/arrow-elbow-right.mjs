export const name="arrow-elbow-right";
export const id="dl_3156363b922e4bc188a3";
export const url=new URL("../icons/arrow-elbow-right.svg?v=2b2dfa776c61b001012de6493f86dd777093f38f001132b41622f5b8430b631f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
