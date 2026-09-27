export const name="bookmark-bold";
export const id="dl_47519137c3354f3ca618";
export const url=new URL("../icons/bookmark-bold.svg?v=98a8cb90a7ce6f9ffa41cdb1322b0d5651c5e1244d152aa98347c08f72cf8b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
