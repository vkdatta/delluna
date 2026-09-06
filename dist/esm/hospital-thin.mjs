export const name="hospital-thin";
export const id="dl_7c097aa96e404d508708";
export const url=new URL("../icons/hospital-thin.svg?v=92faffb08d1100c78185d7419fbb1eb4f08d3467e7391c48b46c54cc0cf36ef9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
