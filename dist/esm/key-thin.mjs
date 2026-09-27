export const name="key-thin";
export const id="dl_b8d13e1271654d8a87df";
export const url=new URL("../icons/key-thin.svg?v=d4a6e8997df8f477c1fef59edfdb0089e689ec7848a6fa19ef92e5686be2f5e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
