export const name="lucid_3-square-arrow-right-exit";
export const id="dl_61475b87842d4c158776";
export const url=new URL("../icons/lucid_3-square-arrow-right-exit.svg?v=7732cb0d5f4a1a0be3fd0927f801e6a3e259c909e2945fcea4fcbcac37c1fee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
