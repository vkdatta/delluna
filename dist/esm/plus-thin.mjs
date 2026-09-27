export const name="plus-thin";
export const id="dl_13501357e15542e780cd";
export const url=new URL("../icons/plus-thin.svg?v=67fb78820f9be74cffaf295309ad6f472343e74d671c4cb7e8dc451f9edbb9b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
