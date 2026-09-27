export const name="circle-light";
export const id="dl_558edb11352c468fa080";
export const url=new URL("../icons/circle-light.svg?v=6e2084716e76ec9cc2bebfb880bb2ed25f361ddcd5a578db7e0f79de09544a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
