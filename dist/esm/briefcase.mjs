export const name="briefcase";
export const id="dl_109158fa36e143a0b9f0";
export const url=new URL("../icons/briefcase.svg?v=71bb620a096a90f68b2be25422bbe266701347a032da68a24e1180443e2215ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
