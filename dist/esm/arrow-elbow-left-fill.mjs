export const name="arrow-elbow-left-fill";
export const id="dl_8d290a6fb8ac4d539423";
export const url=new URL("../icons/arrow-elbow-left-fill.svg?v=4ae4e9060b15b7952dc7ff1bf30955eb382bac7a59e9c29a329bda07764a5543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
