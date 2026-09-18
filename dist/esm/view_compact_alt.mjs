export const name="view_compact_alt";
export const id="dl_c348d7dc3472439791a7";
export const url=new URL("../icons/V/view_compact_alt.svg?v=3c02def7f2c160659a8095888e54cc29f4782255eba5389b653ce97370d2928c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
