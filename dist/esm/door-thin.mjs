export const name="door-thin";
export const id="dl_ab51fb2bbc6f4bbebc2a";
export const url=new URL("../icons/door-thin.svg?v=f0c81b75b6a0ba52a7d33890dc87ff0690854d52d6bef5cefd9086789b5885f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
