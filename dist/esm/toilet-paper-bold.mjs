export const name="toilet-paper-bold";
export const id="dl_54353688cbab14707c9f";
export const url=new URL("../icons/toilet-paper-bold.svg?v=22d8dbb7958260f741c4f97bdcc8c084b0d55b97997a3af20b1c3430910d070c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
