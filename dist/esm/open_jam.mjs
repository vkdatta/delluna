export const name="open_jam";
export const id="dl_f359c29f844c6d8e75f7";
export const url=new URL("../icons/open_jam.svg?v=5b337c9eb00bb4438aca1f508d18fe4508d6dc01d35ae7087f2aad942248724b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
