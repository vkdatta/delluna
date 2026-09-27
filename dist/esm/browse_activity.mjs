export const name="browse_activity";
export const id="dl_852a001045d95816c345";
export const url=new URL("../icons/browse_activity.svg?v=99d2bcb5d57bd3a23d01c64d790482b42b3e6117394705783c2ab2878867e9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
