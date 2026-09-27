export const name="person-simple-hike-thin";
export const id="dl_046ea123dfe24621bd49";
export const url=new URL("../icons/person-simple-hike-thin.svg?v=d430f690a066d555b8692d13530141b71a76c9e3dfe7769951ac585d61430231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
