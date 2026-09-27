export const name="gpp_maybe";
export const id="dl_09bccb59201dd2a9c23e";
export const url=new URL("../icons/gpp_maybe.svg?v=bf98a2d4577c428d4ce2383eecffd8d05925ebd0543b2e57330a806590fdfc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
