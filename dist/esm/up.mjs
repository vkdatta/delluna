export const name="up";
export const id="dl_47d6795d396f2a6e4a55";
export const url=new URL("../icons/up.svg?v=c451a4ed08ad469a3674b747b51cf67039998b9588548789136b0f77704c3252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
