export const name="door_back";
export const id="dl_6c9e69aada324867fd90";
export const url=new URL("../icons/door_back.svg?v=d0c0a5cc417ddb4730c73a6feb7b2a151f7263e0fa7b4255857941aee4e31df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
