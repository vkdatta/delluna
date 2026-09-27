export const name="water_orp-fill";
export const id="dl_2cf2ddc883c42a365b79";
export const url=new URL("../icons/water_orp-fill.svg?v=d91542a30124aaa6ac2a2fb7a654c16729d20010eade69ad42a724235e96fe08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
