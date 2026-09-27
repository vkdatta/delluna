export const name="screwdriver-fill";
export const id="dl_c4f8473f2d1bef4bce43";
export const url=new URL("../icons/screwdriver-fill.svg?v=95b27158f949c3961a328b88bfe807c8e7493d88edd231c3969b63cb5a57d35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
