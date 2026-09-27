export const name="sword-thin";
export const id="dl_bb229a4476f494c3f352";
export const url=new URL("../icons/sword-thin.svg?v=4b4426c8efc6a30161e358c947ca0f0795df6c30c0b83806d1a8b7deade65d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
