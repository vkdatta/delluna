export const name="user-list-light";
export const id="dl_a35b3d7b781c445e9596";
export const url=new URL("../icons/U/user-list-light.svg?v=4383595676ddab77bfb4f5b0ac47ede981ebbb2771bd55f2273a12a956ee1153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
