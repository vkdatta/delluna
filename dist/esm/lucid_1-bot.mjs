export const name="lucid_1-bot";
export const id="dl_811361a8220844e7ba8c";
export const url=new URL("../icons/lucid_1-bot.svg?v=1eb6317a9eea33e1d866f3889193aa3598595865573d0201b177289f9d7b0d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
