export const name="contact_mail-fill";
export const id="dl_9d6e4a497b5cfad809ff";
export const url=new URL("../icons/contact_mail-fill.svg?v=215913ad1357127b25959171b8a1e3676b79889cc1ddf93a41954190194d01ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
