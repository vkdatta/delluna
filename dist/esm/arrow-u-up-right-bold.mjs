export const name="arrow-u-up-right-bold";
export const id="dl_f02a0bef0a594ac887eb";
export const url=new URL("../icons/arrow-u-up-right-bold.svg?v=5d9ea042ae5adb0f3681fd0027401cc8bbd553f61d600a9e748a0d06db6df2c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
