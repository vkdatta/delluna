export const name="perm_data_setting";
export const id="dl_2d56591f549b9912d6a0";
export const url=new URL("../icons/perm_data_setting.svg?v=722ff60f8648416763515ed04eaac71ee613e196ba05e870abccfa16171b57f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
