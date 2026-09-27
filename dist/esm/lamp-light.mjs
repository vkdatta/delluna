export const name="lamp-light";
export const id="dl_9dc3f0241f5f4ce7b406";
export const url=new URL("../icons/lamp-light.svg?v=8b165f7a68767e23dc292ea3b633c31f587d9faf55dd661c1226e69ae6bae2d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
