export const name="arrow-line-down-right";
export const id="dl_8cd72d0a140c4bd584e6";
export const url=new URL("../icons/arrow-line-down-right.svg?v=8b55a06c5e851a6caf8d621455c8ebfc3bf50a14895892d02e24259ecaa7f39d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
