export const name="gear-thin";
export const id="dl_2d948715bf3a42889db2";
export const url=new URL("../icons/gear-thin.svg?v=2b2a7f7aa1523f6902a4c5ef1389859b57337294970735306bfcc5898f4616b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
