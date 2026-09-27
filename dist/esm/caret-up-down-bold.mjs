export const name="caret-up-down-bold";
export const id="dl_4d712f8b648a4c30974b";
export const url=new URL("../icons/caret-up-down-bold.svg?v=cb3e3ecad18c94c723d20b29b648fe565094baa7d78dda8807dfd33a309af982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
