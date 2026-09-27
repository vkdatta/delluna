export const name="pattern-fill";
export const id="dl_a08634540d48949ce227";
export const url=new URL("../icons/pattern-fill.svg?v=ae33c0eacca9deacd0452a4ac70c1530be8805bc6d79edff080a218238ff33e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
