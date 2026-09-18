export const name="sports_golf";
export const id="dl_88cd067c115f46bdad75";
export const url=new URL("../icons/S/sports_golf.svg?v=86006042b21eda33b337783a8cf63e0d78f4543e5a53a7bca7dbae13cb36261a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
