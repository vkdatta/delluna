export const name="scooter-bold";
export const id="dl_8beec637493f146317b1";
export const url=new URL("../icons/scooter-bold.svg?v=72052278517a05d541375580b26fbf4967366c9ab0aa3b57accf9311a37643aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
