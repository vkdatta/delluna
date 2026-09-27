export const name="heart_broken";
export const id="dl_f10801fbf0355e0260f4";
export const url=new URL("../icons/heart_broken.svg?v=5628b40399d676f7533dd8adbbd76e88c0c31b8dda987e90c7968907c88316cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
