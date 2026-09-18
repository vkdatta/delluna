export const name="all_inbox-fill";
export const id="dl_2a6b08de123b4c11a0ed";
export const url=new URL("../icons/all_inbox-fill.svg?v=2d6daf87cdea39dd2ee8803692bdcbed9f15c99c65488ede7a3ddbad947a9c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
