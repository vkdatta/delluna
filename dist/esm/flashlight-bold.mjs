export const name="flashlight-bold";
export const id="dl_afaa747056af4cb897e5";
export const url=new URL("../icons/flashlight-bold.svg?v=7b4e2289bd2d3d35b5231e3e0b702f867844a08cd838fc975a7bba6942f6eca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
