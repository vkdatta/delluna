export const name="holiday_village";
export const id="dl_386afd2f7478623ff63f";
export const url=new URL("../icons/holiday_village.svg?v=21ac2fcb2e169bfd0492ee3c4565abaa81abb205057c08551ca83bc59fa3c8e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
