export const name="nest_mini-fill";
export const id="dl_2062da06c41882178cc4";
export const url=new URL("../icons/nest_mini-fill.svg?v=2786f2026c21dd0910cd6d2ba18ff202ffa8e01b527ddc28fc6c80194076a44a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
