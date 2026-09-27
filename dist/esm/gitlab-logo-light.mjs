export const name="gitlab-logo-light";
export const id="dl_d4f772ca4d474d47980e";
export const url=new URL("../icons/gitlab-logo-light.svg?v=09b126918ea7f560b5af4274a02747c00cadb922861ebbcc757bfbfbe1c516e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
