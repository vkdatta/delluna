export const name="person-simple-walk";
export const id="dl_367fff3185474dc2b45d";
export const url=new URL("../icons/person-simple-walk.svg?v=887d99b8f04c0983236d032e49eb56d2b0cf66fb77c07698f1eb465fea6d507f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
