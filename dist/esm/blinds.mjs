export const name="blinds";
export const id="dl_aa27186f13056992c887";
export const url=new URL("../icons/blinds.svg?v=e4bc0684ea1724d45cf53f3770c84a0c9aa57d16aa6907b696573570ae82925b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
