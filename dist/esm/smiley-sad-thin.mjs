export const name="smiley-sad-thin";
export const id="dl_042b26d2ce3261b93283";
export const url=new URL("../icons/smiley-sad-thin.svg?v=1bdcfbe5b9210a170b22bf13863a29eb1629e18bc1ab2b0b0a5373800b9210ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
