export const name="sports_volleyball";
export const id="dl_6d2bef8882339f1e5a49";
export const url=new URL("../icons/sports_volleyball.svg?v=2e9e3bc8fa06a0f51c896f7fdce9e3ec85362ccebc23d450723a4a9eb77e8788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
