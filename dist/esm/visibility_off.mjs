export const name="visibility_off";
export const id="dl_77592000257627d562dd";
export const url=new URL("../icons/visibility_off.svg?v=ac78630562ae76c71171f1e099b59f6be9f11cf4b00e18d59a9754b8f4cb881d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
