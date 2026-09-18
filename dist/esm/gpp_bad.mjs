export const name="gpp_bad";
export const id="dl_96a11eff17ea437b9204";
export const url=new URL("../icons/G/gpp_bad.svg?v=f98292abbf162cf78e04cc48f03f953a902eb85664ebb802643a460a4d00c2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
