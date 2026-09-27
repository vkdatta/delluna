export const name="arrow-circle-right";
export const id="dl_f5f264bf3b204270be38";
export const url=new URL("../icons/arrow-circle-right.svg?v=ec9bf4f167d20a589ba1f936fa4970959940bebaa18cb90deb4977a8f381b7d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
