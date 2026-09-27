export const name="outgoing_mail";
export const id="dl_ba5c7fba5b756032fc7c";
export const url=new URL("../icons/outgoing_mail.svg?v=2f03334d52b70339f54270995436fb4464456b49da5df2eb6b11de38328f2808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
