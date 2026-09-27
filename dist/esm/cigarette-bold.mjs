export const name="cigarette-bold";
export const id="dl_0951ecd053874f4fbd5b";
export const url=new URL("../icons/cigarette-bold.svg?v=67c7252e222abefcf7c2b843b9578beda8e4aae5f6c0ea41e3a75b7390c5a65d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
