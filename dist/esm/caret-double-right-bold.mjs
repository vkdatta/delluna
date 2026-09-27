export const name="caret-double-right-bold";
export const id="dl_afb01dc7b25645449a18";
export const url=new URL("../icons/caret-double-right-bold.svg?v=66706f61d414493118a16293d01e3e3f450a6eb97176573f168de497c893e0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
