export const name="rocket-launch-bold";
export const id="dl_7807aaa9ad1c46fdb082";
export const url=new URL("../icons/rocket-launch-bold.svg?v=17cdf50ac375807224f127d664edd1b1090dad01a4156c6d9d042f49beb0475d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
