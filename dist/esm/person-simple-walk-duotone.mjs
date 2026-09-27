export const name="person-simple-walk-duotone";
export const id="dl_78226f0b2d834d999640";
export const url=new URL("../icons/person-simple-walk-duotone.svg?v=225ca8fe5b0366ebea4bfddaae5f918f7fe27127c902a9237a4b9aaae99b5b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
