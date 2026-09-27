export const name="hamburger-bold";
export const id="dl_9b19cb9e2e6145f9860e";
export const url=new URL("../icons/hamburger-bold.svg?v=172e23951e833f034a1ef4aa797c4fab56aa67f3331831ff13b8009cf4484447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
