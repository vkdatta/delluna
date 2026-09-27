export const name="caret-circle-up-down-thin";
export const id="dl_64dde4d012594daaab12";
export const url=new URL("../icons/caret-circle-up-down-thin.svg?v=0e54d2ea0a5625da8efea3014c17d998adb5df2f4a5f4678685e5937b48a69c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
