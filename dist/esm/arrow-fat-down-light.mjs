export const name="arrow-fat-down-light";
export const id="dl_b86138603114489e8b9e";
export const url=new URL("../icons/arrow-fat-down-light.svg?v=2a3e2de34f4b0539a4799c4f1b6c4c3363d6538dacfebe229b82f13a81f6f72f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
