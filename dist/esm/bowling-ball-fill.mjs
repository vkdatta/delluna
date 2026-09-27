export const name="bowling-ball-fill";
export const id="dl_c8008623908542af865c";
export const url=new URL("../icons/bowling-ball-fill.svg?v=de30467615a96a9c2364c730e143c350eb9bcfd49bc7f3a9cfe45b08eab75e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
