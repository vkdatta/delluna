export const name="lucid_3-screen-share-off";
export const id="dl_a67ad07ef75648c3ac54";
export const url=new URL("../icons/lucid_3-screen-share-off.svg?v=c0cdebeeab750db78303751d2839118b1fe471d586ded14ebb520b46f01e7f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
