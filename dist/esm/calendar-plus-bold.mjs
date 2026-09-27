export const name="calendar-plus-bold";
export const id="dl_56a20235b9214ba7b947";
export const url=new URL("../icons/calendar-plus-bold.svg?v=744c685b5734b06143af35f687c51afa77689a47d33bcc48fc2fa546ee8374ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
