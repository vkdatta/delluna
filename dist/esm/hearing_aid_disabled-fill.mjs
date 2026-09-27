export const name="hearing_aid_disabled-fill";
export const id="dl_2b559cb2ad9105e35eff";
export const url=new URL("../icons/hearing_aid_disabled-fill.svg?v=d8797710ca32d576303f79857c870447af0c9d8faf6a7942b5a75ae3d48782bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
