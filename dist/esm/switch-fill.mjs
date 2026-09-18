export const name="switch-fill";
export const id="dl_af5cffd81e44492785fd";
export const url=new URL("../icons/switch-fill.svg?v=8c4c9891bf0bb29d9abc1b398e72412aa51a446cf2efb8a2fa2245bebaedf586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
