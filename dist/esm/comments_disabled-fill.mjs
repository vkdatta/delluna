export const name="comments_disabled-fill";
export const id="dl_591f91b966b693890e4f";
export const url=new URL("../icons/comments_disabled-fill.svg?v=d869299e80a1eb86dad16fb156859542683e467328c6f6f93f72815ecfa044bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
