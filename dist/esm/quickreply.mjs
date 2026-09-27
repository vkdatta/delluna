export const name="quickreply";
export const id="dl_893d7cbb7860cf4badad";
export const url=new URL("../icons/quickreply.svg?v=01d68568cf884558a9068aa82ff8be9c99b13656bd2904c4b416ede90f7de14e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
