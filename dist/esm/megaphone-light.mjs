export const name="megaphone-light";
export const id="dl_8e3847892a134f7589e4";
export const url=new URL("../icons/megaphone-light.svg?v=a6ac29cd9c44bfb08e2f3a71f02acb0e5a2400acbedf7f55512880cbbbb6b186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
