export const name="gpp_bad";
export const id="dl_79b891265c2098e4843f";
export const url=new URL("../icons/gpp_bad.svg?v=f98292abbf162cf78e04cc48f03f953a902eb85664ebb802643a460a4d00c2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
