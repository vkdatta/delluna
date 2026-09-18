export const name="brunch_dining-fill";
export const id="dl_64ca9638021848bc9fff";
export const url=new URL("../icons/brunch_dining-fill.svg?v=dd43bd5a2b178ed716d23f9a8cc86bc1482662dea0cad273750fea34a501d4a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
