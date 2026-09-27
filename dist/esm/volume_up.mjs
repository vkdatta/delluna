export const name="volume_up";
export const id="dl_5b2ba45b0ea0573022b1";
export const url=new URL("../icons/volume_up.svg?v=3c899880a1997b9f613d4e6c8213ca40088ea34a83d1a9f4c546c37f8f10df2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
