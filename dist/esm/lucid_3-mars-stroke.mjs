export const name="lucid_3-mars-stroke";
export const id="dl_99b60625fdb4493ea976";
export const url=new URL("../icons/lucid_3-mars-stroke.svg?v=428533b998419405f3ab2596fb4194732581587ae4e63cf39577f7910a9598fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
